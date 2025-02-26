import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { EllipsisVertical } from 'lucide-react'
import { Button } from './ui/button'
import { TodoEditPopOver } from './TodoEditPopOver'

export type TodoProps = {
    id: number,
    completed: boolean,
    title: string
}

const Todo = ({id, completed, title}: TodoProps) => {

  return (
    <div className='border-b border-slate-600/50 dark:border-slate-400 py-4 px-1'>
        <div className="flex items-center space-x-4">
          
          <Checkbox id={`terms${id}`} className="w-8 h-8 appearance-none cursor-pointer relative flex items-center justify-center rounded-[50%] border-2 border-solid border-gray-400 checked:bg-black checked:before:content-['✔'] checked:before:text-white checked:before:text-2xl dark:border-white" defaultChecked={completed} />
        
          <div className="flex justify-between items-center gap-1.5 leading-none w-full">
              <label
              htmlFor={`terms${id}`}
              className={cn("text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70", `${completed ? "line-through font-light text-gray-600 dark:text-gray-300" : "font-medium"}`)}
              >
              {title.charAt(0).toUpperCase() + title.slice(1)}
              </label>

              <TodoEditPopOver side='left'>
                <Button variant={"outline"} className='cursor-pointer'>
                  <EllipsisVertical size={20} />
                </Button>
              </TodoEditPopOver>
          </div>

        </div>
    </div>
  )
}

export default Todo