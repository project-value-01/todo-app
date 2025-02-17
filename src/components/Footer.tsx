import LogoIcon from "@/icons/LogoIcon"


const Footer = () => {
  return (
    <footer className="bg-slate-950">
        <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center gap-5">
                <div className="flex flex-col gap-1 w-36">
                    <div className="flex space-x-2 items-center">
                        <LogoIcon className="fill-blue-600" />
                        <span className="text-lg text-white sm:text-xl font-semibold">Zenith</span>
                    </div>
                    <p className="text-[0.6rem] text-slate-400">Create, distribute and plan your tasks all for free</p>
                </div>
                <div className="sm:w-full">
                    <p className="text-white text-center sm:text-right text-[0.6rem] sm:text-xs">&copy; 2025 Zenith.com . All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer