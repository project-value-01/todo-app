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
import { ReactNode} from "react"

type ModalProps = {
  children: ReactNode;
  modalTitle: string;
  modalDescription: string;
  text: string;
  updateText: (value: string) => void;
  onsubmit?: () => void;
}

export function Modal({children, modalTitle, modalDescription, text, updateText, onsubmit}: ModalProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{modalTitle}</DialogTitle>
          <DialogDescription>{modalDescription}</DialogDescription>
        </DialogHeader>          
          
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="title" className="font-semibold">Title</Label>
            <Input id="title" type="text" value={text} onChange={(e) => updateText(e.target.value)} />
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