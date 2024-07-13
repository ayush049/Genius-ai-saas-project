// import {Button} from "@/components/ui/button";
// import Link from "next/link";

// const LandingPage = () =>{
//     return (
//         <div>
//             Landing Page (unprotected)
//             <div>
//                 <Link href="/sign-in">
//                     <Button>
//                         Login
//                     </Button>
//                 </Link>
//                 <Link href="/sign-up">
//                     <Button>
//                         Register
//                     </Button>
//                 </Link>
//             </div>
//         </div>
//     );
// }
// export default LandingPage;


import React from "react";

import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import LandingContent from "@/components/landing-content";

export default function LandingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}