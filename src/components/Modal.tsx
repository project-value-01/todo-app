import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReactNode } from "react"

type ModalProps = {
  children: ReactNode;
  ModalTitle: string;
  ModalDescription: string;
  onsubmit?: () => void;
}

export function Modal({children, ModalTitle, ModalDescription, onsubmit}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{ModalTitle}</DialogTitle>
          <DialogDescription>{ModalDescription}</DialogDescription>
        </DialogHeader>          
          
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="title" className="font-semibold">Title</Label>
            <Input id="title" type="text" />
          </div>

        <DialogFooter className="flex justify-between items-center">
          <DialogClose>
            <Button type="button" variant={"outline"} className="cursor-pointer">Close</Button>
          </DialogClose>
          
          <Button type="submit" className="cursor-pointer" onClick={onsubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
