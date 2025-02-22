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
import { PopOver } from "./PopOver";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";

export const TaskCard = () => {
  const navigate = useNavigate()
  
  const defaultStyles = `shadow-2xl rounded-4xl overflow-hidden`;
  
  const backgroundStyles = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(p${Math.floor(Math.random() * 42) + 1}.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat"};
  
  return (
    <>      
      <Card className={cn(defaultStyles)} style={backgroundStyles}>
            
            <div className="cursor-pointer" onClick={() => navigate("/todos")}>
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
            </div>

            <CardFooter className="p-3">
                <div className="flex w-full justify-between">
                    <PopOver side="right">
                      <span className="p-3 sm:p-4 bg-transparent hover:bg-white hover:text-black backdrop-blur-sm border-[3px] border-white text-white rounded-full cursor-pointer active:scale-110 transition-all duration-200"><Ellipsis size={22}/></span>
                    </PopOver>
                    <Modal ModalTitle="Create Todo" ModalDescription="Create a new todo, and click save when you're done">
                      <span className="p-3 sm:p-4 bg-transparent hover:bg-white hover:text-black backdrop-blur-sm border-[3px] border-white text-white rounded-full cursor-pointer active:scale-110 transition-all duration-200"><Plus size={22}/></span>
                    </Modal>
                </div>
            </CardFooter>
      </Card>
    </>
  )
}
