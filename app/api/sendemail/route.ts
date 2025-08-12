import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, subject, body: messageBody } = body;

  if (!email || !subject || !messageBody) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465, // Or use 587 with secure: false
    secure: true, // true for port 465, false for 587
    auth: {
      user: "niido@terntribe.com", // your Zoho email
      pass: "!speV5ls", // either your Zoho app password or login password
    },
  });
  

  // const htmlContent = assessmentEmailTemplate(scores);
  const mailOptions = {
    from: `"Niido" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject,
    html: `<h1>Hello!</h1>br<p>${messageBody}</p>`,
    // html:assessmentEmailTemplate({ ADHD: 0, ASD: 0, General: 0 }), // Replace with actual scores if needed
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
