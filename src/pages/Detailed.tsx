import Todo from '@/components/Todo'
import { TodoCard } from '@/components/TodoCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid} from "recharts"
import { useEffect, useState } from 'react'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import TodoModal from '@/components/TodoModal'
import TodoEditModal from '@/components/TodoEditModal'
import TaskEditModal from '@/components/TaskEditModal'

interface todoProps{
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

const chartConfig = {
  remaining: {
    label: "Remaining",
    color: "#2563eb",
  },
  completed: {
    label: "Completed",
    color: "#60a5fa",
  },
} satisfies ChartConfig

function Detailed() {
    const [todos, setTodos] = useState([{
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": true
    }])


    useEffect(() => {
      (async () => {
        const results = await fetch("https://jsonplaceholder.typicode.com/todos/")
        const data = await results.json();
        const newTodos: todoProps[] = data.filter((todo: todoProps) => todo.id <= 6)
        setTodos(newTodos)
      })()
    }, [])

    const completedTodos = todos.filter(todo => todo.completed)
    const incompleteTodos = todos.filter(todo => !todo.completed)

  return (
    <div className="container mx-auto px-6 bg-background">
      <div className='py-8 sm:py-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
          
          <TodoCard totalTodos={completedTodos.length + incompleteTodos.length} completedTodos={completedTodos.length} />
          <ChartContainer config={chartConfig} className="w-full h-full hidden md:block">
            <BarChart accessibilityLayer data={[{
                    name: 'My Todos',  // You can customize the name
                    remaining: incompleteTodos.length,
                    completed: completedTodos.length
            }]}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="remaining" fill="var(--color-remaining)" radius={4} />
              <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
            </BarChart>
          </ChartContainer>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
            
            <div className='mt-10 md:border-r px-3'>
              <h3 className='py-4 text-left text-sm font-medium'>REMAINING ({incompleteTodos.length})</h3>
              <div className='max-h-[310px] overflow-scroll'>
                {incompleteTodos.map(todo => (
                  <Todo key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} />
                ))}
              </div>
            </div>

            <div className='mt-8 md:border-l px-3'>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value='1'>
                  <AccordionTrigger>COMPLETED ({completedTodos.length})</AccordionTrigger>
                  <AccordionContent className='max-h-[310px] overflow-scroll'>
                    {completedTodos.map(todo => (
                      <Todo key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
        </div>
      </div>
      <TodoModal />
      <TaskEditModal />
      <TodoEditModal />
    </div>
  )
}

export default Detailed