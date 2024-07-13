import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2024-06-20",
  typescript: true
});

// To run stripe:
// 1) Go into the folder D:\ai-saas\stripe_1.21.0_windows_x86_64 from my pc.
// 2) Open cmd there.
// 3) Type stripe.exe.
// 4) Type stripe login.
// 5) Now sign-in on the browser.
// 6) Now type stripe listen --forward-to localhost:3000/api/webhook in the cmd.
// 7) Keep this terminal open for stripe working. 
