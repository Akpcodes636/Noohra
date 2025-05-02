"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AssessmentLayout from "../components/Layout/AssessmentLayout";
import { adhdAssessmentQuestions } from "../components/utilis/data/mockAssessmentData";
import useProgressStore from "../zustand/store";
import ResultPage from "../result/page";
// import ResultPage from "../components/ResultPage"; // 👈 We'll create this next

interface Answers {
  [key: string]: string;
}

export default function ADHDAssessment() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { setProgress, progress } = useProgressStore();
  const [answers, setAnswers] = useState<Answers>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = adhdAssessmentQuestions[currentQuestionIndex];

  const handleOptionClick = (optionValue: string): void => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: optionValue,
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < adhdAssessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(progress + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    adhdAssessmentQuestions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (isCompleted) {
    return <ResultPage score={calculateScore()} total={adhdAssessmentQuestions.length} />;
  }

  return (
    <AssessmentLayout
      progress={progress}
      currentStep={currentQuestionIndex + 1}
      totalSteps={adhdAssessmentQuestions.length}
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Left Section - Question and Image */}
        <div className="w-full">
          <div className="mb-6 text-lg">{currentQuestion.question}</div>
          <div className="mt-4 w-[249px] h-[213px]">
            {currentQuestion.imageUrl && (
              <Image
                src={currentQuestion.imageUrl}
                width={500}
                height={500}
                alt="Question illustration"
                className="rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Right Section - Options */}
        <div className="w-full bg-white">
          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                className="bg-[#EAF8F7] w-full h-[47px] rounded-[16px] flex items-center px-[16px] hover:bg-[#D0EEEC] transition-colors"
                onClick={() => handleOptionClick(option.value)}
              >
                <p className="font-semibold text-[20px] text-[#63605D]">
                  {option.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </AssessmentLayout>
  );
}
