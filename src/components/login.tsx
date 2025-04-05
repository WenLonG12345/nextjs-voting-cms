"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { signinGoogle } from "@/lib/social-login";
import { RiLoader3Line } from "@remixicon/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await authClient.signIn.email(
      {
        email,
        password,
        rememberMe: remember,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setLoading(false);
          toast.error(ctx.error.message);
        },
      }
    );
  };

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form className="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]">
        <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
          <div className="text-center">
            <Link href="/" aria-label="go home" className="mx-auto block w-fit">
              <Logo />
            </Link>
            <h1 className="mt-4 mb-1 text-xl font-semibold">
              Sign In to Holaboss
            </h1>
            <p className="text-sm">Welcome back! Sign in to continue</p>
          </div>

          <div className="mt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Username
              </Label>
              <Input
                type="email"
                required
                name="email"
                id="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="pwd" className="text-title text-sm">
                  Password
                </Label>
                <Button asChild variant="link" size="sm" className="h-auto p-0">
                  <Link
                    href="/forget-password"
                    className="text-muted-foreground hover:text-primary text-xs"
                  >
                    Forgot password?
                  </Link>
                </Button>
              </div>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                className="input sz-md variant-mixed"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(checked) =>
                  setRemember(checked === "indeterminate" ? false : checked)
                }
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>

            <Button className="w-full" onClick={signIn} disabled={loading}>
              {loading && <RiLoader3Line className="animate-spin" />}
              Sign In
            </Button>

            <div className="text-center">
              <Button asChild variant="link" className="h-auto p-0">
                <Link
                  href="/forget-password"
                  className="text-muted-foreground text-xs font-normal"
                >
                  Trouble signing in? Reset your password
                </Link>
              </Button>
            </div>
          </div>

          <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <hr className="border-dashed" />
            <span className="text-muted-foreground text-xs">
              Or continue With
            </span>
            <hr className="border-dashed" />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <Button type="button" variant="outline" onClick={signinGoogle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.98em"
                height="1em"
                viewBox="0 0 256 262"
                className="mr-2"
              >
                <path
                  fill="#4285f4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                />
                <path
                  fill="#34a853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                />
                <path
                  fill="#fbbc05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                />
                <path
                  fill="#eb4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                />
              </svg>
              <span>Google</span>
            </Button>
          </div>
        </div>

        <div className="p-3">
          <p className="text-accent-foreground text-center text-sm">
            Don&apos;t have an account ?
            <Button asChild variant="link" className="px-2">
              <Link href="/signup">Create account</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
