export const adhdAssessmentQuestions = [
  {
    id: 1,
    question: "Which is the biggest?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
      { value: "C", label: "C" },
      { value: "D", label: "D" },
    ],
    correctAnswer: "D", // Assuming D is the biggest
  },
  {
    id: 2,
    question: "Choose the one that doesn't belong: Spoon, Fork, Plate, Ball",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Fork" },
      { value: "B", label: "Plate" },
      { value: "C", label: "Ball" },
      { value: "D", label: "Spoon" },
    ],
    correctAnswer: "C", // Ball is not a utensil
  },
  {
    id: 3,
    question: "What's missing in this picture?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Nose" },
      { value: "B", label: "Eye" },
      { value: "C", label: "Ear" },
      { value: "D", label: "Mouth" },
    ],
    correctAnswer: "B", // Assuming an eye is missing
  },
  {
    id: 4,
    question: "What comes next: Red, Blue, Red, Blue, ___?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Red" },
      { value: "B", label: "Blue" },
      { value: "C", label: "Green" },
      { value: "D", label: "Pink" },
    ],
    correctAnswer: "A", // Pattern repeats: Red, Blue, Red, Blue, Red
  },
  {
    id: 5,
    question: "Who is different?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Tiger" },
      { value: "B", label: "Elephant" },
      { value: "C", label: "Banana" },
      { value: "D", label: "Bear" },
    ],
    correctAnswer: "C", // Banana is not an animal
  },
  {
    id: 6,
    question: "Square, Circle, Triangle, Square, ___….What comes next?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Triangle" },
      { value: "B", label: "Square" },
      { value: "C", label: "Circle" },
      { value: "D", label: "Rectangle" },
    ],
    correctAnswer: "C", // Pattern repeats: Square, Circle, Triangle, Square, Circle
  },
  {
    id: 7,
    question: "What happens next: The sun sets, the stars ____.",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Fly" },
      { value: "B", label: "Sleep" },
      { value: "C", label: "Shine" },
      { value: "D", label: "Rain" },
    ],
    correctAnswer: "C", // Stars shine after sunset
  },
  {
    id: 8,
    question: "Sarah had 3 apples and gave 1 away. How many are left?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "2" },
      { value: "B", label: "3" },
      { value: "C", label: "4" },
      { value: "D", label: "1" },
    ],
    correctAnswer: "A", // 3 - 1 = 2
  },
  {
    id: 9,
    question: "A picture of 6 boys with their names. Who is the third boy?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Joe" },
      { value: "B", label: "Nick" },
      { value: "C", label: "Ben" },
      { value: "D", label: "Ronnie" },
    ],
    correctAnswer: "C", // Assuming Ben is the third boy in the image
  },
  {
    id: 10,
    question: "Which number doesn't fit in? 2, 4, 6, 7, 8",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "2" },
      { value: "B", label: "7" },
      { value: "C", label: "8" },
      { value: "D", label: "4" },
    ],
    correctAnswer: "B", // 7 is odd while others are even
  },
  {
    id: 11,
    question: "Which two are the same?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "A & C" },
      { value: "B", label: "E & F" },
      { value: "C", label: "A & F" },
      { value: "D", label: "D & B" },
    ],
    correctAnswer: "A", // Assuming A & C are the same in the image
  },
  {
    id: 12,
    question: "Tom is older than Jim. Jim is older than Alice. Who is the youngest?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Tom" },
      { value: "B", label: "Alice" },
      { value: "C", label: "Jim" },
      { value: "D", label: "Me" },
    ],
    correctAnswer: "B", // Tom > Jim > Alice, so Alice is youngest
  },
  {
    id: 13,
    question: "All dogs fly. Max is a dog. Max can't fly.",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "It's wrong" },
      { value: "B", label: "It's true" },
      { value: "C", label: "I don't know" },
    ],
    correctAnswer: "A", // Logically inconsistent statement
  },
  {
    id: 14,
    question: "Noah has 16 balls. If he shares his balls with his 3 siblings, how many balls will they all get?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "3" },
      { value: "B", label: "4" },
      { value: "C", label: "1" },
      { value: "D", label: "8" },
    ],
    correctAnswer: "B", // 16 ÷ 4 = 4 (Noah + 3 siblings = 4 people)
  },
  {
    id: 15,
    question: "Fill in the blank: Book is to read, as Spoon is to ___?",
    imageUrl: "/image/ADHD.svg",
    options: [
      { value: "A", label: "Cook" },
      { value: "B", label: "Sit" },
      { value: "C", label: "Jump" },
      { value: "D", label: "Clean" },
    ],
    correctAnswer: "A", // Book is used to read, Spoon is used to cook/eat
  },
]