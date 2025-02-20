import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PillIcon from "@/icons/PillIcon";
import { cn } from "@/lib/utils"
import { Ellipsis, Plus } from "lucide-react";
import { Button } from "./ui/button";

export const TaskCard = () => {
  const defaultStyles = `shadow-2xl rounded-4xl overflow-hidden`;
  const backgroundStyles = {backgroundImage: `url(p${Math.floor(Math.random() * 42) + 1}.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat"};
  return (
    <>      
      <Card className={cn(defaultStyles)} style={backgroundStyles}>
          <div className="bg-black/30">
              <CardHeader className="px-3">
                <CardTitle className="text-white text-5xl mt-2">Holidays in Norway</CardTitle>
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
                <div className="flex w-full justify-between">
                    <Button variant={"outline"} className="bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black text-white rounded-full border-[3px] cursor-pointer h-14 w-14" ><Ellipsis className="stroke-2"/></Button>
                    <Button variant={"outline"} className="bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black h-14 w-14 text-white rounded-full border-[3px] cursor-pointer" ><Plus scale={3}/></Button>
                </div>
            </CardFooter>
          </div>
      </Card>
    </>
  )
}
