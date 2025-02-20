import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PillIcon from "@/icons/PillIcon";
import { cn } from "@/lib/utils"
import { ChevronLeft, Ellipsis, Plus} from "lucide-react";
import { Button } from "./ui/button";

type TodoCardProps = {
  totalTodos: number,
  completedTodos: number
}

export const TodoCard = ({totalTodos, completedTodos}: TodoCardProps) => {
  const fillPercentage = (completedTodos / totalTodos) * 100;

  const defaultStyles = `shadow-2xl rounded-4xl relative`;
  
  const backgroundStyles = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(p${Math.floor(Math.random() * 42) + 1}.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat"};


  return (
    <>      
      <Card className={cn(defaultStyles)} style={backgroundStyles}>
              <CardFooter className="p-3">
                <div className="flex w-full justify-between">
                    <Button variant={"outline"} className="bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black h-14 w-14 text-white rounded-full border-[3px] cursor-pointer" ><ChevronLeft /></Button>
                    <Button variant={"outline"} className="bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black text-white rounded-full border-[3px] cursor-pointer h-14 w-14" ><Ellipsis/></Button>
                </div>
              </CardFooter>

              <CardHeader className="px-3">
                  <CardTitle className="text-white text-5xl mt-2">Holidays in Norway</CardTitle>
              </CardHeader>
              
              <CardContent className="my-6">
                <div className="flex space-x-2">
                  <PillIcon height="60px" width="25px" className="fill-none" fillPercentage={fillPercentage} />
                  <div className="flex flex-col text-white">
                    <h2 className="text-2xl font-semibold">{completedTodos}/{totalTodos}</h2>
                    <p className="text-base">tasks</p>
                  </div>
                </div>
              </CardContent>
            <span className="p-5 bg-transparent backdrop-blur-sm border border-white text-white absolute z-0 rounded-full -bottom-6 left-[38%] min-[500px]:left-[43%] cursor-pointer active:scale-110 transition-transform"><Plus size={30} /></span>
      </Card>
    </>
  )
}
