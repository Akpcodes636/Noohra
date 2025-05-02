// app/api/questions/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const tier = url.searchParams.get('tier');

  if (tier === 'ADHD') {
    const mockQuestions = [ 
      { questionText: "Do you find it hard to focus?", options: ["Yes", "No", "Sometimes"] },
      { questionText: "Do you forget tasks easily?", options: ["Yes", "No", "Sometimes"] },
    ];
    return NextResponse.json(mockQuestions);
  }

  return NextResponse.json({ error: "Tier not found" }, { status: 404 });
}
