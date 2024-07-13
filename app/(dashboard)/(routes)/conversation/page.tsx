// // "use client";

// // import React, { useState } from "react";
// // import { MessageSquare } from "lucide-react";
// // import { useForm } from "react-hook-form";
// // import * as z from "zod";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import axios from "axios";
// // import { useRouter } from "next/navigation";
// // import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
// // // import { toast } from "react-hot-toast";

// // import Heading from "@/components/heading";
// // import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Empty } from "@/components/empty";
// // import { Loader } from "@/components/loader";
// // // import { UserAvatar } from "@/components/user-avatar";
// // // import { BotAvatar } from "@/components/bot-avatar";

// // import { cn } from "@/lib/utils";
// // // import { useProModal } from "@/hooks/use-pro-modal";

// // import { formSchema } from "./constants";

// // export default function ConversationPage() {
// //   // const proModal = useProModal();
// //   const router = useRouter();

// //   const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);


// //   const form = useForm<z.infer<typeof formSchema>>({
// //     resolver: zodResolver(formSchema),
// //     defaultValues: {
// //       prompt: ""
// //     }
// //   });

// //   const isLoading = form.formState.isSubmitting;

// //   const onSubmit = async (values: z.infer<typeof formSchema>) => {
// //     try {
// //       const userMessage: ChatCompletionMessageParam = {
// //         role: "user",
// //         content: values.prompt
// //       };
// //       const newMessages = [...messages, userMessage];

// //       const response = await axios.post("/api/conversation", {
// //         messages: newMessages
// //       });

// //       setMessages((current) => [...current, userMessage, response.data]);

// //       form.reset();
// //     } catch (error: any) {
// //       // if (error?.response?.status === 403) proModal.onOpen();
// //       // else toast.error("Something went wrong.");
// //     } finally {
// //       router.refresh();
// //     }
// //   };

// //   return (
// //     <div>
// //       <Heading
// //         title="Conversation"
// //         description="Our Most Advanced Conversation Model"
// //         icon={MessageSquare}
// //         iconColor="text-violet-500"
// //         bgColor="bg-violet-500/10"
// //       />
// //       <div className="px-4 lg:px-8">
// //         <div>
// //           <Form {...form}>
// //             <form
// //               onSubmit={form.handleSubmit(onSubmit)}
// //               className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
// //             >
// //               <FormField
// //                 name="prompt"
// //                 render={({ field }) => (
// //                   <FormItem className="col-span-12 lg:col-span-10">
// //                     <FormControl className="m-0 p-0">
// //                       <Input
// //                         disabled={isLoading}
// //                         placeholder="How do I calculate the radius of a circle?"
// //                         className="pl-2 border-0 outline-none focus-visible:ring-0 focus-visible: ring-transparent"
// //                         {...field}
// //                       />
// //                     </FormControl>
// //                   </FormItem>
// //                 )}
// //               />
// //               <Button
// //                 disabled={isLoading}
// //                 className="col-span-12 lg:col-span-2 w-full"
// //               >
// //                 Generate
// //               </Button>
// //             </form>
// //           </Form>
// //         </div>
// //         <div className="space-y-4 mt-4">
// //           {isLoading && (
// //             <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
// //               <Loader />
// //             </div>
// //           )}
// //           {messages.length === 0 && !isLoading && (
// //             <Empty label="No Conversation Started Yet." />
// //           )}
// //           <div className="flex flex-col-reverse gap-y-4">
// //             {messages.map((message) => (
// //               <div key={message.content}>
// //                 {message.content}
// //               </div>
// //               //   className={cn(
// //               //     "p-8 w-full flex items-start gap-x-8 rounded-lg",
// //               //     message.role === "user"
// //               //       ? "bg-white border border-black/10"
// //               //       : "bg-muted"
// //               //   )}
// //               // >
// //               //   {/* {message.role === "user" ? <UserAvatar /> : <BotAvatar />} */}
// //               //   <p className="text-sm">{message.content}</p>
// //               // </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// "use client";

// import React, { useState } from "react";
// import { MessageSquare } from "lucide-react";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
// // import { toast } from "react-hot-toast";

// import Heading from "@/components/heading";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Empty } from "@/components/empty";
// import { Loader } from "@/components/loader";
// // import { UserAvatar } from "@/components/user-avatar";
// // import { BotAvatar } from "@/components/bot-avatar";

// import { cn } from "@/lib/utils";
// // import { useProModal } from "@/hooks/use-pro-modal";

// import { formSchema } from "./constants";

// export default function ConversationPage() {
//   // const proModal = useProModal();
//   const router = useRouter();

//   const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       prompt: ""
//     }
//   });

//   const isLoading = form.formState.isSubmitting;

//   // const onSubmit = async (values: z.infer<typeof formSchema>) => {
//   //   try {
//   //     const userMessage: ChatCompletionMessageParam = {
//   //       role: "user",
//   //       content: values.prompt
//   //     };
//   //     const newMessages = [...messages, userMessage];

//   //     const response = await axios.post("/api/conversation", {
//   //       messages: newMessages
//   //     });

//   //     setMessages((current) => [...current, userMessage, response.data]);

//   //     form.reset();
//   //   } catch (error: any) {
//   //     // if (error?.response?.status === 403) proModal.onOpen();
//   //     // else toast.error("Something went wrong.");
//   //   } finally {
//   //     router.refresh();
//   //   }
//   // };

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       const userMessage: ChatCompletionMessageParam = {
//         role: "user",
//         content: values.prompt
//       };
//       const newMessages = [...messages, userMessage];
  
//       console.log("Sending messages to API:", newMessages);
  
//       const response = await axios.post("app/conversation/api/conversation", {
//         messages: newMessages
//       });
  
//       console.log("API response:", response.data);
  
//       // Verify the structure of the API response
//       if (response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
//         const botMessage: ChatCompletionMessageParam = response.data.choices[0].message;
  
//         setMessages((current) => [...current, userMessage, botMessage]);
  
//         console.log("Updated messages:", [...messages, userMessage, botMessage]);
  
//         form.reset();
//       } else {
//         console.error("Unexpected API response structure:", response.data);
//       }
//     } catch (error: any) {
//       console.error("Error during message submission:", error);
//       // if (error?.response?.status === 403) proModal.onOpen();
//       // else toast.error("Something went wrong.");
//     } finally {
//       router.refresh();
//     }
//   };
  
//   return (
//     <div>
//       <Heading
//         title="Conversation"
//         description="Our Most Advanced Conversation Model"
//         icon={MessageSquare}
//         iconColor="text-violet-500"
//         bgColor="bg-violet-500/10"
//       />
//       <div className="px-4 lg:px-8">
//         <div>
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
//             >
//               <FormField
//                 name="prompt"
//                 render={({ field }) => (
//                   <FormItem className="col-span-12 lg:col-span-10">
//                     <FormControl className="m-0 p-0">
//                       <Input
//                         disabled={isLoading}
//                         placeholder="How do I calculate the radius of a circle?"
//                         className="pl-2 border-0 outline-none focus-visible:ring-0 focus-visible: ring-transparent"
//                         {...field}
//                       />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />
//               <Button
//                 disabled={isLoading}
//                 className="col-span-12 lg:col-span-2 w-full"
//               >
//                 Generate
//               </Button>
//             </form>
//           </Form>
//         </div>
//         <div className="space-y-4 mt-4">
//           {isLoading && (
//             <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
//               <Loader />
//             </div>
//           )}
//           {messages.length === 0 && !isLoading && (
//             <Empty label="No Conversation Started Yet." />
//           )}
//           <div className="flex flex-col-reverse gap-y-4">
//             {messages.map((message, index) => {
//               if (!message || typeof message.content !== 'string') {
//                 console.error('Invalid message object:', message);
//                 return null;
//               }
              
//               return (
//                 <div
//                   key={index}
//                   className={cn(
//                     "p-8 w-full flex items-start gap-x-8 rounded-lg",
//                     message.role === "user"
//                       ? "bg-white border border-black/10"
//                       : "bg-muted"
//                   )}
//                 >
//                   {/* {message.role === "user" ? <UserAvatar /> : <BotAvatar />} */}
//                   <p className="text-sm">{message.content}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueConversation } from './action';
import { readStreamableValue } from 'ai/rsc';
import { MessageSquare } from "lucide-react";
import Heading from "@/components/heading";

import { Empty } from '@/components/empty';


// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Chat() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>();
  // const isLoading = form.formState.isSubmitting;
  return (
    <>
    <div >
          <Heading
            title="Conversation"
            description="Our Most Advanced Conversation Model"
            icon={MessageSquare}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
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
                  <span>{m.content as string}</span>
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
          placeholder="Say something..."
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </div>
    </>
  );
}