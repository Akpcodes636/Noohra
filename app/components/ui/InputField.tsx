"use client";
import React from "react";

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  css?: string;
  autoComplete?: string;
  value?: string;
  readonly?: boolean;
}

const InputField: React.FC<InputProps> = ({
  placeholder,
  name,
  readonly,
  label,
  value,
  autoComplete,
}) => {
  return (
    <div className="flex flex-col gap-2 my-[30px]">
      <label className="label-class" htmlFor={name}>
        {label}
      </label>
      <div className="w-full">
      <input
          readOnly={readonly}
          id={name}
          name={name}
        //   type={view && type === "password" ? "text" : type}
          placeholder={placeholder}
          value={value}
       
          autoComplete={autoComplete}
          className="input-class"
        />
      </div>
    </div>
  );
};

export default InputField;
