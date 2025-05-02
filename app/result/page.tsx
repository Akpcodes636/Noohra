"use client";

import Link from "next/link";

interface ResultPageProps {
  score: number;
  total: number;
}

const ResultPage = ({ score, total }: ResultPageProps) => {
  // Determine placement based on score
  const getPlacement = () => {
    if (score <= 3) {
      return "Foundational";
    } else if (score <= 5) {
      return "Grade 1";
    } else if (score <= 7) {
      return "Grade 2–3";
    } else if (score <= 9) {
      return "Grade 4–5";
    } else {
      return "Grade 6";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAF8F7] to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#2D7B7E] mb-2">Assessment Complete!</h1>
            <p className="text-gray-600">Thank you for completing the assessment</p>
          </div>
          
          {/* Score Display */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#F8FBFB] rounded-xl p-6 text-center">
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#2D7B7E]">{score}</span>
                <span className="text-xl text-gray-500"> / {total}</span>
              </div>
              <p className="text-lg font-medium text-gray-700">Correct Answers</p>
            </div>
          </div>
          
          {/* Result Information */}
          <div className="bg-[#F8FBFB] rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-[#2D7B7E] mb-4">Results</h2>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Placement</p>
              <p className="font-medium text-lg">{getPlacement()}</p>
            </div>
            
            <h3 className="text-md font-semibold text-[#2D7B7E] mt-4 mb-2">Assessment Coverage</h3>
            <p className="text-gray-700 mb-2">This assessment evaluated cognitive skills in four key areas:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Pattern Recognition</li>
              <li>Working Memory</li>
              <li>Logical Reasoning</li>
              <li>Focus & Attention</li>
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard" className="flex-1">
              <button className="w-full bg-[#2D7B7E] hover:bg-[#246264] text-white font-medium py-3 px-6 rounded-xl transition-colors">
                Return to Dashboard
              </button>
            </Link>
            <Link href="/assessments" className="flex-1">
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

export default ResultPage;