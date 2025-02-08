import { ArrowRight, Loader } from "lucide-react";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FormSignUp() {
const [isPending, setIsPending] = useState(false);

const formSchema = z
    .object({
      username: z.string().trim().min(1, {
        message: "Name is required",
      }),
      email: z.string().trim().email().min(1, {
        message: "Email is required",
      }),
      password: z.string().trim().min(1, {
        message: "Password is required",
      }),
      confirmPassword: z.string().min(1, {
        message: "Confirm Password is required",
      }),
    })
    .refine((val) => val.password === val.confirmPassword, {
      message: "Password does not match",
      path: ["confirmPassword"],
    });

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

    return (
        <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                          Username
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Techwithemma" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-4">
                  <FormField
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
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
                  disabled={isPending}
                  type="submit"
                >
                  {isPending && <Loader className="animate-spin" />}
                  Create account
                  <ArrowRight />
                </Button>
                <div className="mb-4 mt-4 flex items-center justify-center">
                  <div
                    aria-hidden="true"
                    className="h-px w-full bg-[#eee] dark:bg-[#d6ebfd30]"
                    data-orientation="horizontal"
                    role="separator"
                  ></div>
                  <span className="mx-4 text-xs dark:text-[#f1f7feb5] font-normal">
                    OR
                  </span>
                  <div
                    aria-hidden="true"
                    className="h-px w-full bg-[#eee] dark:bg-[#d6ebfd30]"
                    data-orientation="horizontal"
                    role="separator"
                  ></div>
                </div>
              </form>
            </Form>
        </div>
    )
}