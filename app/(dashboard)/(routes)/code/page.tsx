
'use client';

import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueConversation } from './action';
import { readStreamableValue } from 'ai/rsc';
import { Code } from "lucide-react";
import Heading from "@/components/heading";
import ReactMarkdown from "react-markdown"
import { Empty } from '@/components/empty';
import { getStaticProps } from 'next/dist/build/templates/pages';

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function CodePage() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>();
  // const isLoading = form.formState.isSubmitting;
  return (
    <>
    <div >
          <Heading
            title="Code Generation"
            description="Generate code using descriptive text"
            icon={Code}
            iconColor="text-green-700"
            bgColor="bg-green-700/10"
          />
          </div>
          {messages.length === 0  && (
             <Empty label="No Conversation Started Yet." />
         )}
          
    {/* <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch ">
    
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {messages.map((m, i) => (
        // <div key={i} className="whitespace-pre-wrap ">
        <div key={i} className={`p-4 mb-4 rounded-lg ${m.role === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
          <strong>{m.role === 'user' ? 'User: ' : 'Genius: '}</strong>
          <span className="ml-2">{m.content as string}</span>
        </div> */}

               <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {messages.map((m, i) => (
          <div key={i} className={`flex mb-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'assistant' && (
              <div className="flex items-center text-left text-black">
                <img src="/logo.png" alt="Logo" className="mr-2 w-6 h-6" /> {/* Update the src to the path of your logo */}
                <span>{m.content as string}</span>
              </div>
            )}
            {m.role === 'user' && (
              <div className="w-fit max-w-md text-right">
                <div className="p-2 border border-gray-300 rounded-lg inline-block bg-blue-100">
                <ReactMarkdown
  components={{
    pre: ({ node, ...props }) => (
      <div className='overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg'>
        <pre {...props} />
      </div>
    ),
    code: ({ node, ...props }) => (
      <code className='bg-black/10 rounded-lg p-1' {...props} />
    ),
  }}
  className="text-sm overflow-hidden leading-7"
>
  {/* {m.content || ""} */}
  
  {typeof m.content === 'string' ? m.content : ''}
 
</ReactMarkdown>

                  
                </div>
              </div>
            )}
          </div>
   
      ))}

      <form
        onSubmit={async e => {
          e.preventDefault();
          const newMessages: CoreMessage[] = [
            ...messages,
            { content: input, role: 'user' },
          ];

          setMessages(newMessages);
          setInput('');

          const result = await continueConversation(newMessages);
          // setData(result.data);

          for await (const content of readStreamableValue(result.message)) {
            setMessages([
              ...newMessages,
              {
                role: 'assistant',
                content: content as string,
              },
            ]);
          }
        }}
      >
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Simple toggle button using react hooks."
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </div>
    </>
  );
}