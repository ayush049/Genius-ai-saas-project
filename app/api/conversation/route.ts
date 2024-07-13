// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// const openax = require('openai');
// const { Configuration, OpenAIApi } = openax;

// // import { Configuration, OpenAIApi } from "openai";
// // import Configuration from "openai";
// // import OpenAIApi from "openai";

// // import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
// // import { checkSubscription } from "@/lib/subscription";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY
// });

// const openai = new OpenAIApi(configuration);

// export async function POST(req: Request) {
//   try {
//     const { userId } = auth();
//     const body = await req.json();
//     const { messages } = body;

//     if (!userId) return new NextResponse("UnAuthorized", { status: 401 });

//     if (!configuration.apiKey)
//       return new NextResponse("OpenAI API Key Not Configured", { status: 500 });

//     if (!messages)
//       return new NextResponse("Messages Are Required", { status: 400 });

//     // const freeTrial = await checkApiLimit();
//     // const isPro = await checkSubscription();

//     // if (!freeTrial && !isPro)
//     //   return new NextResponse("Free Trial Has Expired", { status: 403 });

//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages
//     });

//     // if (!isPro) await increaseApiLimit();

//     return NextResponse.json(response.data.choices[0].message);
//   } catch (error) {
//     console.error("[CONVERSATION_ERROR]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }



// import { NextRequest, NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";


// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY as string);

// const generationConfig = {
//     stopSequences: ["red"],
//     maxOutputTokens: 500,
//     temperature: 0.7,
//     topP: 0.6,
//     topK: 16,
//   };
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig});

// export async function POST(request: NextRequest) {
// 	const {messages} = await request.json();
// 	const prompt = messages[messages.length - 1].content;
	
//   const result = await model.generateContent(prompt);
// 	return NextResponse.json(result.response.text() , { status: 200 });
// }



import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require("openai");

import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';

// import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) return new NextResponse("UnAuthorized", { status: 401 });

    if (!configuration.apiKey)
      return new NextResponse("OpenAI API Key Not Configured", { status: 500 });

    if (!messages)
      return new NextResponse("Messages Are Required", { status: 400 });

    const freeTrial = await checkApiLimit();
    // const isPro = await checkSubscription();

    if (!freeTrial ) 
      //&& !isPro)
      return new NextResponse("Free Trial Has Expired", { status: 403 });

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });

    // if (!isPro) 
    await increaseApiLimit();

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 
