"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader, MailCheckIcon } from "lucide-react";
import Logo from "@/components/logo";
import { toast } from "@/hooks/use-toast";
import {Card} from "@/components/ui/card";

export default function SignUp() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm();
  
  const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
  })
  
  return (
    <>
      <main className="w-full min-h-[590px] h-auto max-w-full pt-10">
        {!isSubmitted ? (
            <Card>
          <div className="w-full p-5 rounded-md">
            <h1 className="text-xl tracking-[-0.16px] dark:text-[#fcfdffef] font-bold mb-1.5 mt-8 text-center sm:text-left">
              Create Account
            </h1>
            <p className="mb-6 text-center sm:text-left text-base dark:text-[#f1f7feb5] font-normal">
              Already have an account?{" "}
              <Link className="text-primary" href="/">
                Sign In
              </Link>
              .
            </p>
            <Form {...form} >
              <form >
                <div className="mb-4">
                  <FormField
                   control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Example" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-4">
                  <FormField
                    
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="subscribeto@channel.com"
                            autoComplete="off"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-4">
                  <FormField
                    
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••••••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mb-4">
                  <FormField
                    
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••••••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  className="w-full text-[15px] h-[40px] !bg-blue-500 text-white font-semibold"
                  
                  type="submit"
                >
                  
                  Create account
                  <ArrowRight />
                </Button>

                
              </form>
            </Form>
            
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
          </Card>
        ) : (
          <div className="w-full h-[80vh] flex flex-col gap-2 items-center justify-center rounded-md">
            <div className="size-[48px]">
              <MailCheckIcon size="48px" className="animate-bounce" />
            </div>
            <h2 className="text-xl tracking-[-0.16px] dark:text-[#fcfdffef] font-bold">
              Check your email
            </h2>
            <p className="mb-2 text-center text-sm text-muted-foreground dark:text-[#f1f7feb5] font-normal">
              We just sent a verification link to .
            </p>
            <Link href="/">
              <Button className="h-[40px]">
                Go to login
                <ArrowRight />
              </Button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}