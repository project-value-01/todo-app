import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

export type TodoProps = {
    id: number,
    completed: boolean,
    title: string
}

const Todo = ({id, completed, title}: TodoProps) => {
  return (
    <div className='border-b py-4'>
        <div className="flex items-center space-x-4">
        <Checkbox id={`terms${id}`} className="w-8 h-8 appearance-none cursor-pointer relative flex items-center justify-center rounded-[50%] border-2 border-solid border-gray-400 checked:bg-black checked:before:content-['✔'] checked:before:text-white checked:before:text-2xl dark:border-white" defaultChecked={completed} />
        <div className="grid gap-1.5 leading-none">
            <label
            htmlFor={`terms${id}`}
            className={cn("text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", `${completed ? "line-through font-light text-gray-600" : "font-medium"}`)}
            >
            {title.charAt(0).toUpperCase() + title.slice(1)}
            </label>
        </div>
        </div>
    </div>
  )
}

export default Todo