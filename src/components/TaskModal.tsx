import { XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask } from "@/lib/api";
import useModalStore from "@/store/states";
import { useAuth } from "@clerk/clerk-react";

const TaskModal = () => {
    const {description, updateDescription, taskModalState, closeTaskModal} = useModalStore();
    const queryClient = useQueryClient();
    const {userId: clerkId} = useAuth();

    // Mutations
    const mutation = useMutation({
      mutationFn: createTask,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['tasks'] })
      },
    })

    const handleSubmit = () => {
      mutation.mutate({
        clerkId,
        description,
        // background
      })
      updateDescription("")
    }

  if (!taskModalState) return null; // Don't render the modal if it's closed

  return (
    <div data-slot="dialog-portal">
      <div
        data-state={taskModalState ? "open" : "closed"}
        data-slot="dialog-overlay"
        className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        onClick={closeTaskModal} // Added onClick event to close modal
      >
        <div
          data-slot="dialog-content"
          data-state={taskModalState ? "open" : "closed"}
          className="bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[425px] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          <button
            data-state={taskModalState ? "open" : "closed"}
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            onClick={closeTaskModal}
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </button>

          <div data-slot="dialog-header" className="flex flex-col gap-2 text-left mb-3">
            <h2 data-slot="dialog-title" className="text-lg leading-none font-semibold">
              Create Task
            </h2>
            <p data-slot="dialog-description" className="text-muted-foreground font-medium text-sm">
              Create a new task, and click save when you're done.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="title" className="font-semibold capitalize">
                description
              </Label>
              <Input id="title" type="text" className="border-primary" value={description} onChange={e => updateDescription(e.target.value)} />
            </div>

            <div data-slot="dialog-footer" className="flex gap-2 justify-between items-center">
              <Button
                type="button"
                className="cursor-pointer dark:hover:bg-white/70"
                onClick={closeTaskModal}
              >
                Close
              </Button>
              <Button type="submit" className="cursor-pointer bg-emerald-500 hover:bg-emerald-400 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-400 transition duration-150">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;