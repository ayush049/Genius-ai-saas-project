// 'use client';

// import { type CoreMessage } from 'ai';
// import { useState } from 'react';
// import { continueConversation } from './action';
// import { readStreamableValue } from 'ai/rsc';
// import { ImageIcon} from "lucide-react";
// import Heading from "@/components/heading";

// import { Empty } from '@/components/empty';

// // Force the page to be dynamic and allow streaming responses up to 30 seconds
// export const dynamic = 'force-dynamic';
// export const maxDuration = 30;

// export default function ImagePage() {
//   const [messages, setMessages] = useState<CoreMessage[]>([]);
//   const [input, setInput] = useState('');
//   const [data, setData] = useState<any>();
//   // const isLoading = form.formState.isSubmitting;
//   return (
//     <>
//     <div >
//           <Heading
//             title="Image Generation"
//             description="Turn your prompt into an image."
//             icon={ImageIcon}
//             iconColor="text-pink-700"
//             bgColor="bg-pink-700/10"
//           />
//           </div>
//           {messages.length === 0  && (
//              <Empty label="No Conversation Started Yet." />
//          )}
          
//     {/* <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch ">
    
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//       {messages.map((m, i) => (
//         // <div key={i} className="whitespace-pre-wrap ">
//         <div key={i} className={`p-4 mb-4 rounded-lg ${m.role === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
//           <strong>{m.role === 'user' ? 'User: ' : 'Genius: '}</strong>
//           <span className="ml-2">{m.content as string}</span>
//         </div> */}
//                <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
//         {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//         {messages.map((m, i) => (
//           <div key={i} className={`flex mb-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//             {m.role === 'assistant' && (
//               <div className="flex items-center text-left text-black">
//                 <img src="/logo.png" alt="Logo" className="mr-2 w-6 h-6" /> {/* Update the src to the path of your logo */}
//                 <span>{m.content as string}</span>
//               </div>
//             )}
//             {m.role === 'user' && (
//               <div className="w-fit max-w-md text-right">
//                 <div className="p-2 border border-gray-300 rounded-lg inline-block bg-blue-100">
//                   <span>{m.content as string}</span>
//                 </div>
//               </div>
//             )}
//           </div>
   
//       ))}

//       <form
//         onSubmit={async e => {
//           e.preventDefault();
//           const newMessages: CoreMessage[] = [
//             ...messages,
//             { content: input, role: 'user' },
//           ];

//           setMessages(newMessages);
//           setInput('');

//           const result = await continueConversation(newMessages);
//           // setData(result.data);

//           for await (const content of readStreamableValue(result.message)) {
//             setMessages([
//               ...newMessages,
//               {
//                 role: 'assistant',
//                 content: content as string,
//               },
//             ]);
//           }
//         }}
//       >
//         <input
//           className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={e => setInput(e.target.value)}
//         />
//       </form>
//     </div>
//     </>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { Image } from "lucide-react";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";

// import Heading from "@/components/heading";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Empty } from "@/components/empty";
// import { Loader } from "@/components/loader";

// import { useProModal } from "@/hooks/use-pro-modal";

// import { formSchema } from "./constants";

// export default function ImagePage() {
//   const proModal = useProModal();
//   const router = useRouter();
//   const [image, setImage] = useState<string>();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       prompt: ""
//     }
//   });

//   const isLoading = form.formState.isSubmitting;

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       setImage(undefined);

//       const response = await axios.post("/api/image", values);

//       setImage(response.data.image);
//       form.reset();
//     } catch (error: any) {
//       if (error?.response?.status === 403) proModal.onOpen();
//       else toast.error("Something went wrong.");
//     } finally {
//       router.refresh();
//     }
//   };

//   return (
//     <div>
//       <Heading
//         title="Image Generation"
//         description="Turn your prompt into an image."
//         icon={Image}
//         iconColor="text-pink-700"
//         bgColor="bg-pink-700/10"
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
//                         placeholder="A sunny beach with palm trees"
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
//           {!image && !isLoading && <Empty label="No Image Generated." />}
//           {image && (
//             <div className="w-full mt-8">
//               <img src={image} alt="Generated" className="w-full" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { Image } from "lucide-react";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";

// import Heading from "@/components/heading";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Empty } from "@/components/empty";
// import { Loader } from "@/components/loader";

// import { useProModal } from "@/hooks/use-pro-modal";

// import { formSchema } from "./constants";

// export default function ImagePage() {
//   const proModal = useProModal();
//   const router = useRouter();
//   const [image, setImage] = useState<string>();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       prompt: ""
//     }
//   });

//   const isLoading = form.formState.isSubmitting;

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       setImage(undefined);
//       const response = await axios.post("/api/image", values);
//       console.log("API Response:", response.data); // Log the full response

//       setImage(response.data.image); // Adjust if the key is different
//       form.reset();
//     } catch (error: any) {
//       if (error?.response?.status === 403) proModal.onOpen();
//       else toast.error("Something went wrong.");
//     } finally {
//       router.refresh();
//     }
//   };

//   return (
//     <div>
//       <Heading
//         title="Image Generation"
//         description="Turn your prompt into an image."
//         icon={Image}
//         iconColor="text-pink-700"
//         bgColor="bg-pink-700/10"
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
//                         placeholder="A sunny beach with palm trees"
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
//           {!image && !isLoading && <Empty label="No Image Generated." />}
//           {image && (
//             <div className="w-full mt-8">
//               <img src={image} alt="Generated" className="w-full" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import { ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";

export default function ImagePage() {
  const proModal = useProModal();
  const router = useRouter();
  const [image, setImage] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImage(undefined);

      const response = await axios.post("/api/image", values);

      setImage(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) proModal.onOpen();
      else toast.error("Something went wrong.");
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        disabled={isLoading}
                        placeholder="A futuristic cityscape at night"
                        className="pl-2 border-0 outline-none focus-visible:ring-0 focus-visible: ring-transparent"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                className="col-span-12 lg:col-span-2 w-full"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!image && !isLoading && <Empty label="No Image Generated Yet." />}
          {image && (
            <img
              src={image}
              alt="Generated Image"
              className="w-full aspect-square rounded-lg border bg-black my-8"
            />
          )}
        </div>
      </div>
    </div>
  );
}
