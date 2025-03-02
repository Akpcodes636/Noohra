
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';



export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const router = useRouter();

interface Role {
    id: string;
    label: string;
}

const roles: Role[] = [
    { id: 'learner', label: 'Learner' },
    { id: 'parent', label: 'Parent' },
    { id: 'therapist', label: 'Therapist' }
];

const handleRoleChange = (role: string) => {
    setSelectedRole(role);
};
  
  const handleContinue = () => {
    if (selectedRole) {
      // You could either:
      // 1. Redirect to a specific page for that role
      router.push(`/register/${selectedRole}`);
      
      // Or 2. Store the role in localStorage/sessionStorage and stay on the same page
      // localStorage.setItem('selectedRole', selectedRole);
      // router.push('/register/details');
    }
  };
  
  return (
    <div className="w-full h-full">
      <h1 className="text-[32px] font-bold mb-[24px] text-[#0E1133] leading-[26px] ">Register as a</h1>
      
      <div className="">
        {roles.map((role) => (
          <div 
            key={role.id}
            className={`rounded-lg cursor-pointer transition-colors ${
              selectedRole === role.id ? 'border-[#2B4EFF] bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => handleRoleChange(role.id)}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border ${
                selectedRole === role.id ? 'border-[#2B4EFF] bg-[#2B4EFF]' : 'border-gray-300'
              } mr-3`}></div>
              <span className="font-medium">{role.label}</span>
            </div>
          </div>
        ))}
      </div>
      
      <Button type="button" style='primary'
        css="w-full py-3 bg-[#15544D] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!selectedRole}
        fn={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
}