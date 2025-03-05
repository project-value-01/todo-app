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
import { TaskEditPopOver } from "./TaskEditPopOver";
import { useNavigate } from "react-router-dom";
import useModalStore from "@/store/states";

export type TaskCardProps = {
  id?: string,
  description: string,
  background: string, 
  fillPercentage: number, 
  totalTodos: number, 
  completedTodos: number
}

export const TaskCard = ({id, description, background, fillPercentage, totalTodos, completedTodos}: TaskCardProps) => {
  const {openTodoModal, updateTaskId} = useModalStore();
  const navigate = useNavigate()
  
  const defaultStyles = `shadow-2xl rounded-4xl overflow-hidden relative`;

  const backgroundStyles = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"};
  
  return (
    <>      
      <Card className={cn(defaultStyles)} style={backgroundStyles}>
            
            <div className="cursor-pointer mb-32" onClick={() => {
              updateTaskId(String(id))
              navigate(`/todos/${id}`)
            }}>
              <CardHeader className="px-3">
                  <CardTitle className="text-white text-5xl h-[100px] line-clamp-2" title={description}>{description}</CardTitle>
              </CardHeader>
              
              <CardContent className="mt-6">
                <div className="flex space-x-2">
                  <PillIcon height="60px" width="25px" className="fill-none" fillPercentage={fillPercentage} />
                  <div className="flex flex-col text-white">
                    <h2 className="text-2xl font-semibold">{completedTodos}/{totalTodos}</h2>
                    <p className="text-base">tasks</p>
                  </div>
                </div>
              </CardContent>
            </div>

            <CardFooter className="p-3 absolute bottom-0 w-full">
                <div className="flex w-full justify-between">
                    <TaskEditPopOver side="right">
                      <span className="p-3 sm:p-4 bg-transparent hover:bg-white hover:text-black backdrop-blur-sm border-[3px] border-white text-white rounded-full cursor-pointer active:scale-110 transition-all duration-200" title="Options"
                      onClick={() => updateTaskId(String(id))}
                      ><Ellipsis size={22}/></span>
                    </TaskEditPopOver>

                    <span className="p-3 sm:p-4 bg-transparent hover:bg-white hover:text-black backdrop-blur-sm border-[3px] border-white text-white rounded-full cursor-pointer active:scale-110 transition-all duration-200"
                    onClick={() => {
                      updateTaskId(String(id));
                      openTodoModal();
                    }}
                    title="Create Todo"
                    ><Plus size={22}/></span>
                </div>
            </CardFooter>
      </Card>
    </>
  )
}
