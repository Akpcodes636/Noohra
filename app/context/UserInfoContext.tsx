"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

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
}

// Define the context type
interface UserInfoContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  updateAnswer: (questionId: number, option: string) => void;
}

// Create the context with a fallback value (we'll override in the provider)
const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);

// Provider component
export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    gender: "",
    age: "",
    testTaker: null,
    neurotype: "",
    answers: {},
    diagnosis: "",
    assessment: ""
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

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo, updateAnswer }}>
      {children}
    </UserInfoContext.Provider>
  );
};

// Custom hook to use the context
export const useUserInfo = (): UserInfoContextType => {
  const context = useContext(UserInfoContext);
  console.log(context);
  
  if (!context) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }
  
  return context;
};