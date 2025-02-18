import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PillIcon from "@/icons/PillIcon";
import { cn } from "@/lib/utils"
import { Ellipsis } from "lucide-react";
import { Button } from "./ui/button";

export const TaskCard = ({image}: {image?: string}) => {

  const defaultStyles = "shadow-2xl rounded-4xl border bg-cover bg-no-repeat";

  return (
    <Card className={cn(defaultStyles, `bg-[url(/p5.jpg)]`)}>
        <CardHeader className="px-3">
            <CardTitle className="text-white text-4xl mt-2">Holidays in Norway</CardTitle>
        </CardHeader>
        <CardContent className="my-6">
          <div className="flex space-x-2">
            <PillIcon height="60px" width="25px" className="fill-none" fillPercentage={40} />
            <div className="flex flex-col text-white">
              <h2 className="text-2xl font-semibold">8/10</h2>
              <p className="text-base">tasks</p>
            </div>
          </div>

        </CardContent>
        <CardFooter className="p-3">
            <Button variant={"outline"} className="bg-transparent dark:border-white h-14 w-14 text-white rounded-full border-2 cursor-pointer" ><Ellipsis /></Button>
        </CardFooter>
    </Card>
  )
}
