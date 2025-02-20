import LogoIcon from "@/icons/LogoIcon"
import { ModeToggle } from "./mode-toggle"
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navbar = () => {
    const {isSignedIn} = useUser()
    const currentLocation = useLocation()
    const navigate = useNavigate()

    const handleClick = () => {
        // if(currentLocation.pathname === "/home"){
            
        // }else{

        // }
    }

  return (
    <header className='sticky top-0 left-0 z-50 border-b border-slate-400/30 bg-background'>
        <div className="container mx-auto px-4 h-16">
            <div className="flex items-center justify-between gap-4 h-full">
                {/* RIGHT */}
                <Link to={`${isSignedIn ? "/home" : "/" }`}>
                    <div className="flex space-x-2 items-center">
                        <LogoIcon className="fill-blue-600" />
                        <span className="text-lg sm:text-xl font-semibold">Zenith</span>
                    </div>
                </Link>

                {/* LEFT */}
                <div className="flex items-center justify-center space-x-3 sm:space-x-5">
                    {currentLocation.pathname !== "/" 
                    ? <Button variant={"default"} className="cursor-pointer bg-chart-4 dark:text-white dark:hover:text-black transition duration-200 active:scale-110" onClick={handleClick}>{currentLocation.pathname === "/home" ? "New Task" : "New Todo"}</Button> 
                    : <Button variant={"default"} className="cursor-pointer bg-chart-2 dark:text-white dark:hover:text-black transition duration-200 active:scale-110" onClick={() => navigate("/home")}>Your Tasks</Button>
                    }

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