"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import { RoleContent } from '../utilis/contents/RegisterPage.Content';

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const router = useRouter();

  interface Role {
    title: string;
    description: string;
  }

  // const handleRoleSelect = (roleId: number): void => {
  //   setSelectedRole(roleId);
  // };

  const handleContinue = () => {
    // if (selectedRole !== null) {
    //   // Navigate to the next page, potentially with the role information
    //   router.push(`/register/details?role=${selectedRole}`);
    // }
    router.push("/register/learner")
  };

  return (
    <div className="w-full h-full flex items-center flex-col justify-center">
      <div className='min-w-[400px]'>
        <h2 className='mb-[24px] text-[32px] leading-[26px] font-medium'>Register as a</h2>
      </div>
      <div className=''>
        {RoleContent.map((role, index) => (
          <div 
            key={index} 
            className={`${
              selectedRole === index 
                ? 'bg-[#D3F2F0] border-2 border-[#14B8A6]' 
                : 'bg-[#EAF8F7]'
            } rounded-[8px] w-[405px] h-[101px] mb-[24px] py-[16px] px-[24px] cursor-pointer transition-colors`}
            // onClick={() => handleRoleSelect(index)}
          >
            <h1 className='font-semibold text-[20px] leading-[24px] mb-[12px]'>{role.title}</h1>
            <p className='text-[12px] leading-[16px] text-[#535253]'>{role.description}</p>
          </div>
        ))}
      </div>
      <Button 
        type="button" 
        style={selectedRole !== null ? 'primary' : 'disabled'} 
        css='w-[405px] h-[56px] rounded-[8px] bg-[#15544D] text-[#FFF]'
        fn={handleContinue}
        // disabled={selectedRole === null}
      >
        Continue
      </Button>
    </div>
  );
}