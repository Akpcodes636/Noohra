
interface ButtonProps {
    children: React.ReactNode; // Correct type for children
    type: "button" | "submit" | "reset"; // Can be 'button', 'submit', or 'reset'
    fn?: () => void; // The function to be executed when the button is clicked
    loading?: boolean;
    disabled?: boolean;
    style:
      | "danger"
      | "nobg"
      | "primary"
      | "reverse"
      | "reverseLight"
      | "secondary"
      | "disabled"
      | "tertiary";
    css?: string;
  }

  const Button: React.FC<ButtonProps> =({
    children,
    type,
    fn,
    style,
    css,
  }) =>{
    return (
        <button onClick={fn} type={type} className={`flex cursor-pointer h-14 items-center justify-center rounded-[4px] duration-150 font-semibold leading-[26px] text-[16px] transition-all  ${css}
        ${
            style === "primary" &&
            "bg-[#000000] text-white"
        }${
            style === "secondary" && 
            "bg-[#000000] text-white"
        }${
            style === "tertiary" && 
            "border-[1px] border-[#CFCECD] text-white-100"
          }`
        }
          >

              {children}
        </button>
    )
  }

  export default Button;