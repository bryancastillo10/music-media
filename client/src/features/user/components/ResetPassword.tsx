import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import InputBlock from "@/features/auth/components/InputBlock"

const ResetPassword = () => {
  return (
	<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
		  <div className="w-full max-w-sm">
			    <div className="flex flex-col gap-6" >
      	<form>
			<div className="flex flex-col gap-6">
			<div className="flex flex-col items-center gap-2">
				
				<div className="flex size-8 items-center justify-center rounded-md">
					<Lock className="size-6" />
				</div>							
				<h1 className="text-xl font-bold">Reset Account Password</h1>				
			</div>

			<p>Please provide your account e-mail address and we will send a 
			verification code to allow your password reset</p>
			<div className="flex flex-col gap-6">
				<InputBlock
					id="email"
					type="email"
					label="Email"
					placeholder="email@domain.com"
				/>			
				<Button type="submit" className="w-full">
				Send Code
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
		</div>
		  </div>
		</div>
  )
}

export default ResetPassword;
