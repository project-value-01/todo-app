import { ReactNode} from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Edit2, Trash } from "lucide-react";
import useModalStore from "@/store/states";
import { useAuth } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/api/tasks";

type TaskEditPopOverProps = {
  children: ReactNode;
  align?: "center" | "end" | "start";
  side?: "bottom" | "left" | "right" | "top";
};

export function TaskEditPopOver({ children, align, side}: TaskEditPopOverProps) {
  const { openTaskEditModal, taskId} = useModalStore();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (taskId: string) => {
      const token = await getToken();
      return deleteTask(taskId, String(token));
    },
    onSuccess: () => {
      console.log("Task deleted successfully:");
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: (error) => {
      console.error("Error deleting task:", error);
    },
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent align={align} side={side} className="bg-black/50 dark:bg-white/50 backdrop-blur-2xl border-0">
        <div className="flex gap-4 justify-around">
          <Button className="cursor-pointer bg-amber-500 hover:bg-amber-500 dark:text-white active:scale-90 transition duration-200" onClick={openTaskEditModal} title="Edit"><Edit2 /></Button>
          <Button variant={"destructive"} className="cursor-pointer dark:bg-rose-500 active:scale-90 transition duration-200" title="Delete"
          onClick={() => {
            mutation.mutate(taskId)
          }}
          >
            <Trash />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}