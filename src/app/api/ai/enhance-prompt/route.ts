import { NextResponse } from 'next/server';
export async function POST(req:Request){const body=await req.json();return NextResponse.json({success:true,enhancedPrompt:`Production-ready video prompt: ${body.prompt||''}. Include a strong hook, coherent scenes, consistent characters, natural dialogue, captions, music, cinematic lighting, and a clear call to action.`})}
