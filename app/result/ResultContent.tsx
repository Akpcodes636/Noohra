"use client";

import { useUserInfo } from "../context/UserInfoContext";
import Link from "next/link";
import { useEffect } from "react";
// import { ASSESSMENT_RESULT_TEMPLATE } from "../lib/emailTemplate";

const ResultContent = () => {
  const { userInfo } = useUserInfo();
  const { score, email } = userInfo;

  // Step 1: Determine dominant score category
  const getPrimaryDiagnosis = () => {
    const { X, Y, Z } = score;

    if (X > Y && X > Z) return "ADHD traits are most prominent.";
    if (Y > X && Y > Z) return "ASD traits are most prominent.";
    if (Z > X && Z > Y) return "General behaviors (may overlap ADHD/ASD).";
    return "Mixed or balanced traits across categories.";
  };

  const diagnosisSummary = getPrimaryDiagnosis();

  // Step 2: Send result to backend to email user (optional enhancement)
  useEffect(() => {
    const sendEmail = async () => {
      try {
        await fetch("/api/sendemail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            subject: "Your Assessment Results",
            body: `
              Hello,

              Here are your assessment results:

              - ADHD-related Score (Category X): ${score.X}
              - ASD-related Score (Category Y): ${score.Y}
              - General/Mixed Score (Category Z): ${score.Z}

              Summary: ${diagnosisSummary}

              Thank you for taking the assessment.

              Niido Team
            `
          }),
        });
      } catch (err) {
        console.error("Failed to send email:", err);
      }
    };

    if (email) sendEmail();
  }, [email, score, diagnosisSummary]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAF8F7] to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#2D7B7E] mb-2">
              Assessment Complete!
            </h1>
            <p className="text-gray-600">Thank you for completing the assessment</p>
          </div>

          {/* Score Breakdown */}
          <div className="space-y-4 mb-6 text-sm md:text-base">
            <p><strong>Email:</strong> {email}</p>
            <p><strong>ADHD Score (X):</strong> {score.X}</p>
            <p><strong>ASD Score (Y):</strong> {score.Y}</p>
            <p><strong>General Score (Z):</strong> {score.Z}</p>
            <p className="text-[#2D7B7E] font-semibold">{diagnosisSummary}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="flex-1">
              <button className="w-full bg-[#2D7B7E] hover:bg-[#246264] text-white font-medium py-3 px-6 rounded-xl transition-colors">
                Back Home
              </button>
            </Link>
            <Link href="/" className="flex-1">
              <button className="w-full bg-[#EAF8F7] hover:bg-[#D0EEEC] text-[#2D7B7E] font-medium py-3 px-6 rounded-xl border border-[#2D7B7E] transition-colors">
                Try Another Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContent;
