"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import FormSignUp from "@/components/auth/form-signup";

export default function SignUp() {

  return (
    <>
      <main className="w-full min-h-[590px] h-auto max-w-full pt-10">
       
          <div className="w-full p-5 rounded-md">
            <Logo />

            <h1 className="text-xl tracking-[-0.16px] dark:text-[#fcfdffef] font-bold mb-1.5 mt-8 text-center sm:text-left">
              Create account
            </h1>
            <p className="mb-6 text-center sm:text-left text-base dark:text-[#f1f7feb5] font-normal">
              Already have an account?{" "}
              <Link className="text-primary" href="/">
                Sign in
              </Link>
              .
            </p>
            <FormSignUp />
            
            <Button variant="outline" className="w-full h-[40px]">
              Email magic link
            </Button>
            <p className="text-xs font-normal mt-4">
              By signing up, you agree to our{" "}
              <a className="text-primary hover:underline" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-primary hover:underline" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        
      </main>
    </>
  );
}
