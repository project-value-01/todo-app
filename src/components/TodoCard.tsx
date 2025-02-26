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
import { TaskEditPopOver } from "./TaskEditPopOver";
import { useNavigate } from "react-router-dom";
import useModalStore from "@/store/states";

type TodoCardProps = {
  totalTodos: number,
  completedTodos: number
}

export const TodoCard = ({totalTodos, completedTodos}: TodoCardProps) => {
  const {openTodoModal} = useModalStore();
  const navigate = useNavigate()

  const fillPercentage = (completedTodos / totalTodos) * 100;

  const defaultStyles = `shadow-2xl rounded-4xl relative`;
  
  const backgroundStyles = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(p${Math.floor(Math.random() * 42) + 1}.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat"};


  return (
    <>      
      <Card className={cn(defaultStyles)} style={backgroundStyles}>
              <CardFooter className="p-3">
                <div className="flex w-full justify-between">
                    
                    <span className="p-3 sm:p-4 bg-transparent hover:bg-white hover:text-black backdrop-blur-sm border-[3px] border-white text-white rounded-full cursor-pointer active:scale-110 transition-all duration-200"
                    onClick={() => navigate("/home")}
                    title="Previous Page"
                    ><ChevronLeft size={25} /></span>

                    <TaskEditPopOver side="left">
                      <span className="p-3 sm:p-4 bg-transparent hover:bg-white hover:text-black backdrop-blur-sm border-[3px] border-white text-white rounded-full cursor-pointer active:scale-110 transition-all duration-200"
                      title="Options"
                      ><Ellipsis size={25}/></span>
                    </TaskEditPopOver>
                </div>
              </CardFooter>

              <CardHeader className="px-3">
                  <CardTitle className="text-white text-5xl line-clamp-2 h-[100px]">Zargos mountains are the peak beauty</CardTitle>
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

              <span className="p-5 bg-transparent backdrop-blur-sm border border-white text-white absolute z-0 rounded-full -bottom-6 left-[38%] min-[500px]:left-[43%] cursor-pointer active:scale-110 transition-transform"
              onClick={openTodoModal}
              title="Create Todo"
              ><Plus size={30} /></span>
 
      </Card>
    </>
  )
}
