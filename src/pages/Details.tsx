import Todo from '@/components/Todo'
import { TodoCard } from '@/components/TodoCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"
import { useEffect, useState } from 'react'

interface todoProps{
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

function Details() {
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
        const newTodos: todoProps[] = data.filter((todo: todoProps) => todo.id <= 10)
        setTodos(newTodos)
      })()
    }, [])

    const completedTodos = todos.filter(todo => todo.completed)
    const incompleteTodos = todos.filter(todo => !todo.completed)

  return (
    <div className='container mx-auto px-6 bg-background'>
      <div className='py-6 sm:py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
          <TodoCard totalTodos={completedTodos.length + incompleteTodos.length} completedTodos={completedTodos.length} />
          <ResponsiveContainer  width="100%" className="p-2 hidden md:block">
              <BarChart
                  width={500}
                  height={300}
                  data={[{
                    name: 'My Todos',  // You can customize the name
                    remaining: incompleteTodos.length,
                    complete: completedTodos.length
                  }]}
                  margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="remaining" stackId="a" fill="#8884d8" />
                  <Bar dataKey="complete" fill="#9663e9" />
              </BarChart>
          </ResponsiveContainer >
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
            <div className='mt-10 md:border-r px-3'>
              <h3 className='py-4 text-left text-sm font-medium'>REMAINING ({incompleteTodos.length})</h3>
              {incompleteTodos.map(todo => (
                <Todo key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} />
              ))}
            </div>
            <div className='mt-8 md:border-l px-3'>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value='1'>
                  <AccordionTrigger>COMPLETED ({completedTodos.length})</AccordionTrigger>
                  <AccordionContent>
                    {completedTodos.map(todo => (
                      <Todo key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
        </div>


      </div>
      
    </div>
  )
}

export default Details