"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AssessmentLayout from "../components/Layout/AssessmentLayout";
import useProgressStore from "../store/progressbar";
import { useUserInfo } from "../context/UserInfoContext";

// Define allowed categories
type Category = "X" | "Y" | "Z";

interface Option {
  value: string;
  label: string;
  category: Category;
  points: number;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
  imageUrl?: string;
}

export default function ADHDAssessment() {
  const { userInfo, updateAnswer, updateScore } = useUserInfo();
  // const [score, setScore] = useState<Record<Category, number>>({
  //   X: 0,
  //   Y: 0,
  //   Z: 0,
  // });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const { setProgress, progress } = useProgressStore();
  const router = useRouter();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("/api/questions");
        const data = await res.json();

        const formattedQuestions: Question[] = data.A.map((q: any) => ({
          id: q.id.toString(),
          question: q.question,
          options: Object.entries(q.options).map(
            ([key, option]: [string, any]) => ({
              value: key,
              label: option.text,
              category: option.category as Category,
              points: option.points,
            })
          ),
        }));

        setQuestions(formattedQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionClick = (selectedValue: string) => {
    const current = questions[currentStep];
    const selectedOption = current.options.find(
      (opt) => opt.value === selectedValue
    );

    if (selectedOption) {
      updateScore(selectedOption.category, selectedOption.points);
      updateAnswer(parseInt(current.id), selectedValue);
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

  // Skeleton Loader
  if (loading) {
    return (
      <AssessmentLayout
        progress={progress}
        currentStep={currentStep}
        totalSteps={10}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-[200px] w-full bg-gray-300 rounded-lg" />
            </div>
            <div className="space-y-4">
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="h-[90px] bg-gray-200 rounded-[16px] w-full max-w-[530px]"
                  />
                ))}
            </div>
          </div>
        </div>
      </AssessmentLayout>
    );
  }

  // Main UI
  return (
    <AssessmentLayout
      progress={progress}
      currentStep={currentStep}
      totalSteps={questions.length}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
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
