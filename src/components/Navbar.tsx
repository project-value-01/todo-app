
import LogoIcon from "@/icons/LogoIcon"
import { ModeToggle } from "./mode-toggle"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "./ui/button"

const Navbar = () => {
//   const {isSignedIn} = useUser()

  return (
    <header className='sticky top-0 left-0 border-b border-slate-400/30 bg-background'>
        <div className="container mx-auto px-4 h-16">
            <div className="flex items-center justify-between gap-4 h-full">
                {/* RIGHT */}
                <div className="flex space-x-2 items-center">
                        <LogoIcon className="fill-blue-600" />
                        <span className="text-lg sm:text-xl font-semibold">Zenith</span>
                </div>

                {/* LEFT */}
                <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                    <ModeToggle />
                    
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode='modal'
                        children={
                            <Button variant={"outline"} className="cursor-pointer">Sign In</Button>
                        }
                        >
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Navbar