import { NextResponse } from "next/server";

const answerMapping: Record<number, "a" | "b" | "c"> = {
  1: "a", // or you can ignore this if you're scoring by category
  2: "b",
  3: "c",
};

const scoreMapping: Record<"a" | "b" | "c", "ADHD" | "ASD" | "General"> = {
  a: "ADHD",
  b: "ASD",
  c: "General",
};

export async function GET() {
  return NextResponse.json({ answerMapping, scoreMapping });
}
