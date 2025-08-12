import { assessmentEmailTemplate } from "@/app/components/utilis/emailTemplates";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import { assessmentEmailTemplate } from "@/utils/emailTemplates";

const scoreMapping: Record<"a" | "b" | "c", "ADHD" | "ASD" | "General"> = {
  a: "ADHD",
  b: "ASD",
  c: "General",
};

type AnswersPayload = {
  answers: Record<number, "a" | "b" | "c">;
  email: string;
};

export async function POST(req: Request) {
  try {
    const { answers, email }: AnswersPayload = await req.json();

    const scores = { ADHD: 0, ASD: 0, General: 0 };
    for (const questionId in answers) {
      const selected = answers[questionId];
      const category = scoreMapping[selected];
      if (category) scores[category]++;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"Assessment Bot" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Assessment Results",
      html: assessmentEmailTemplate(scores),
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
