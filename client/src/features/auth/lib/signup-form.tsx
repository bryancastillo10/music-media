import { AudioLines } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import InputBlock from "@/features/auth/components/InputBlock"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <AudioLines className="size-6" />
              </div>
              <span className="sr-only">StrumIt AudioLines App</span>
            </a>
            <h1 className="text-xl font-bold">Register Now to Get Started</h1>
            
          </div>
          <div className="flex flex-col gap-6">
            <InputBlock
                id="username"
                type="text"
                label="Username"
                placeholder="Enter your username"
            />
            <InputBlock
                id="email"
                type="email"
                label="Email"
                placeholder="email@domain.com"
            />
            <InputBlock
                id="password"
                type="password"
                label="Password"
                placeholder="Provide a password"
            />

            <InputBlock
                id="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="Retype your password"
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
         <div className="text-left text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
 
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
