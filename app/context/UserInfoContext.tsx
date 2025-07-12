"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the category types
export type Category = "X" | "Y" | "Z";

// Define the shape of the user info
export interface UserInfo {
  email: string;
  testTaker: "myself" | "someone_else" | null;
  gender: string;
  age: string;
  neurotype: string;
  answers: Record<string, string>;
  diagnosis: string;
  assessment: string;
  score: Record<Category, number>; // ✅ Add score here
}

// Define the context type
interface UserInfoContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  updateAnswer: (questionId: number, option: string) => void;
  updateScore: (category: Category, points: number) => void; // ✅ Add updateScore
}

// Create the context
const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);

// Provider
export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    gender: "",
    age: "",
    testTaker: null,
    neurotype: "",
    answers: {},
    diagnosis: "",
    assessment: "",
    score: { X: 0, Y: 0, Z: 0 } // ✅ Initialize score
  });

  console.log(userInfo);
  
  const updateAnswer = (questionId: number, option: string) => {
    setUserInfo((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: option,
      },
    }));
  };

  const updateScore = (category: Category, points: number) => {
    setUserInfo((prev) => ({
      ...prev,
      score: {
        ...prev.score,
        [category]: prev.score[category] + points,
      },
    }));
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo, updateAnswer, updateScore }}>
      {children}
    </UserInfoContext.Provider>
  );
};

// Custom hook
export const useUserInfo = (): UserInfoContextType => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }
  return context;
};
