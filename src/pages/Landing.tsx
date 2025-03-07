import { SignInButton, useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Landing = () => {
  const navigate = useNavigate()
  const {isSignedIn} = useUser()

  const handleClick = () => {
    if(!isSignedIn){
      navigate("/")
    }else{
      navigate("/home")
    }
  }

  return (
    <div className="container mx-auto px-7 bg-background">
        <div className="flex flex-col items-center py-16 md:py-20">
            <h1 className="text-5xl md:text-7xl font-prociono text-center min-[550px]:w-[517.7px] md:w-[736px] tracking-wide leading-14 md:leading-20 mb-14">Think, plan and track <span className="text-slate-500 dark:text-slate-400">all in one place</span></h1>
            <SignInButton mode="modal">
              <Button size={"lg"} className="cursor-pointer bg-blue-600 hover:bg-blue-200 hover:text-slate-700 active:scale-125 transition-transform dark:text-white dark:hover:text-slate-700 mb-20" onClick={handleClick}>Get Started</Button>
            </SignInButton>

            <section>
              <div className="flex flex-col gap-5 sm:hidden">
                <img src="https://zenithtodobucket.s3.us-east-1.amazonaws.com/dailytasks.png" alt="daily tasks image" className="rounded-2xl" />
                <img src="https://zenithtodobucket.s3.us-east-1.amazonaws.com/yourprojects.png" alt="your projects image" className="rounded-2xl" />
              </div>
              <img src="https://zenithtodobucket.s3.us-east-1.amazonaws.com/heroimg.webp" alt="Hero image" className="rounded-4xl hidden sm:block" />
            </section>
        </div>
    </div>
  )
}

export default Landing