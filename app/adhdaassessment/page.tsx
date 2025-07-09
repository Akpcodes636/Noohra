"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import AssessmentLayout from "../components/Layout/AssessmentLayout";
import useProgressStore from "../store/progressbar";
import { useUserInfo } from "../context/UserInfoContext";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string }[];
  correctAnswer: string;
  imageUrl?: string;
}

export default function ADHDAssessment() {
  // ✅ Move useUserInfo inside the component
  const { userInfo, updateAnswer } = useUserInfo();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const { setProgress, progress } = useProgressStore();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("/api/questions");
        const data = await res.json();
        setQuestions(data.questions);
        // Flatten and normalize the response
        const formattedQuestions: Question[] = data.A.map((q: any) => ({
          id: q.id.toString(),
          question: q.question,
          options: Object.entries(q.options).map(
            ([key, option]: [string, any]) => ({
              value: key,
              label: option.text,
            })
          ),
          correctAnswer: "", // Leave empty or define if you have this
          imageUrl: q.imageUrl || null,
        }));

        setQuestions(formattedQuestions);
        // console.log(data)
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionClick = (selectedValue: string) => {
    const currentQuestionId = questions[currentStep]?.id;
    if (currentQuestionId) {
      updateAnswer(Number(currentQuestionId), selectedValue);
    }

    const nextStep = currentStep + 1;
    if (nextStep < questions.length) {
      setCurrentStep(nextStep);
      setProgress((nextStep / questions.length) * 100);
    } else {
      router.push("/result");
    }
  };

  const currentQuestion = questions[currentStep];

  console.log(currentQuestion);

  return (
    <AssessmentLayout
      progress={progress}
      currentStep={currentStep}
      totalSteps={questions.length}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          {/* Left Section */}
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="mb-4 text-[12px] md:text-[18px] font-semibold text-center md:text-left">
              {currentQuestion?.question}
            </div>
            <div className="mt-4 w-full max-w-[250px] md:max-w-[285px] min-h-[116px] mx-auto">
              <Image
                src="/image/Hero.png"
                width={500}
                height={500}
                alt="Question illustration"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - Options */}
          <div className="w-full bg-white">
            <div className="space-y-4">
              {currentQuestion?.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  className="bg-[#EAF8F7] w-full max-w-[311px] md:max-w-[530px] rounded-[16px] h-[90px] flex items-center px-4 md:px-6 hover:bg-[#D0EEEC] transition-colors cursor-pointer"
                >
                  <p className="font-semibold text-[12px] text-[#63605D]">
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AssessmentLayout>
  );
}