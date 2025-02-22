import { ReactNode } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { Edit2, Trash } from "lucide-react"

type PopOverProps = {
  children: ReactNode, 
  align?: "center" | "end" | "start", 
  side?: "bottom" | "left" | "right" | "top",
}

export function PopOver({children, align, side}: PopOverProps) {
  return (
    <Popover>
        <PopoverTrigger asChild>
            {children}
        </PopoverTrigger>
        <PopoverContent align={align} side={side} className="bg-black/50 dark:bg-white/50 backdrop-blur-2xl border-0">
            <div className="flex gap-4 justify-around">
                <Button className="cursor-pointer bg-amber-500 hover:bg-amber-500 dark:text-white active:scale-90 transition duration-200"><Edit2 /></Button>
                <Button variant={"destructive"} className="cursor-pointer dark:bg-rose-500 active:scale-90 transition duration-200"><Trash /></Button>
             </div>
        </PopoverContent>
    </Popover>
  )
}