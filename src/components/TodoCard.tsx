import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PillIcon from "@/icons/PillIcon";
import { cn } from "@/lib/utils";
import { ChevronLeft, Ellipsis, Plus } from "lucide-react";
// import { TaskEditPopOver } from "./TaskEditPopOver";
import { useNavigate, useParams } from "react-router-dom";
import useModalStore from "@/store/states";
import { useQuery} from "@tanstack/react-query";
import { fetchTask } from "@/api/tasks";
import { useAuth } from "@clerk/clerk-react";

type TodoCardProps = {
  totalTodos: number;
  completedTodos: number;
};

export const TodoCard = ({ totalTodos, completedTodos }: TodoCardProps) => {
  const { getToken } = useAuth();
  const { id } = useParams();
  const { openTodoModal, taskId, updateTaskId } = useModalStore();
  const navigate = useNavigate();

  const { data: task, isLoading, error } = useQuery({
    queryKey: ["task", taskId || id],
    queryFn: async () => {
      const arg = String(taskId) || String(id);
      const token = await getToken();
      return fetchTask(arg, String(token));
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading task</p>;
  }

  if (!task) {
    return <p>No task found</p>;
  }

  const fillPercentage = (completedTodos / totalTodos) * 100;

  const defaultStyles = `shadow-2xl rounded-4xl relative`;

  const backgroundStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${task.background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Card className={cn(defaultStyles)} style={backgroundStyles}>
        <CardFooter className="p-3">
          <div className="flex w-full justify-between">
            <span
              className="p-3 sm:p-4 bg-transparent hover:bg-white hover:text-black backdrop-blur-sm border-[3px] border-white text-white rounded-full cursor-pointer active:scale-110 transition-all duration-200"
              onClick={() => navigate("/home")}
              title="Previous Page"
            >
              <ChevronLeft size={25} />
            </span>

            {/* <TaskEditPopOver side="left"> */}
            <span
              className="p-3 sm:p-4 bg-transparent hover:bg-white hover:text-black backdrop-blur-sm border-[3px] border-white text-white rounded-full cursor-pointer active:scale-110 transition-all duration-200"
              title="Options"
              onClick={() => {
                updateTaskId(id ? String(id) : String(taskId));
              }}
            >
              <Ellipsis size={25} />
            </span>
            {/* </TaskEditPopOver> */}
          </div>
        </CardFooter>

        <CardHeader className="px-3">
          <CardTitle className="text-white text-5xl line-clamp-2 h-[100px]">
            {task.description}
          </CardTitle>
        </CardHeader>

        <CardContent className="my-6">
          <div className="flex space-x-2">
            <PillIcon
              height="60px"
              width="25px"
              className="fill-none"
              fillPercentage={fillPercentage}
            />
            <div className="flex flex-col text-white">
              <h2 className="text-2xl font-semibold">
                {completedTodos}/{totalTodos}
              </h2>
              <p className="text-base">tasks</p>
            </div>
          </div>
        </CardContent>

        <span
          className="p-5 bg-transparent backdrop-blur-sm border border-white text-white absolute z-0 rounded-full -bottom-6 left-[38%] min-[500px]:left-[43%] cursor-pointer active:scale-110 transition-transform"
          title="Create Todo"
          onClick={() => {
            updateTaskId(id ? String(id) : String(taskId));
            openTodoModal();
          }}
        >
          <Plus size={30} />
        </span>
      </Card>
    </>
  );
};