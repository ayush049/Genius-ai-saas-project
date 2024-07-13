// import { UserButton } from '@clerk/nextjs'
// import { Button } from './ui/button'
// import { Menu } from 'lucide-react'
// import MobileSidebar from '@/components/mobile-sidebar'

// const navbar = () => {
//   return (
//     <div className='flex items-center p-4'>
//         <MobileSidebar/>
//         <div className='flex w-full justify-end'>
//             <UserButton afterSignOutUrl='/' />
//         </div>
//     </div>
//   )
// }

// export default navbar

import React from "react";
import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export default async function Navbar() {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}