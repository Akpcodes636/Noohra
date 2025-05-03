"use client";
import Link from "next/link";
import AssessmentHeader from "../components/Assesment/AssessmentHeader";

// import AssessmentHeader from "../components/AssessmentHeader";

export default function CognitiveAssessmentInfo() {
    // const router = useRouter(); // Initialize the router
    
    //   const handleClick = () => {
    //     router.push("/adhdaassessment"); // Navigate to finalassessment page
    //   };
  return (
    <div className="min-h-screen bg-white">
      <AssessmentHeader />
      
      <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Our Cognitive Assessment</h1>
        
        <p className="text-lg mb-12">
          This assessment measures cognitive abilities across pattern recognition, 
          working memory, logical reasoning, and focus & attention. 
          Age-appropriate questions will help us determine the best learning path for your child.
        </p>
        
        <Link href="/adhdaassessment" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-medium inline-block">
          Begin Assessment
        </Link>
      </div>
    </div>
  );
}