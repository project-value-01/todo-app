import Todo from '@/components/Todo';
import { TodoCard } from '@/components/TodoCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import TodoModal from '@/components/TodoModal';
import TodoEditModal from '@/components/TodoEditModal';
import TaskEditModal from '@/components/TaskEditModal';
import { fetchTodos, TodoResponse } from '@/api/todos';
import useModalStore from '@/store/states';
import { useAuth } from '@clerk/clerk-react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const chartConfig = {
  remaining: {
    label: 'Remaining',
    color: '#2563eb',
  },
  completed: {
    label: 'Completed',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

function Detailed() {
  const { taskId } = useModalStore();
  const { id } = useParams();
  const { getToken } = useAuth();

  const { data: todos, isLoading, error } = useQuery({
    queryKey: ['todos', taskId || id],
    queryFn: async () => {
      const arg = String(taskId) || String(id);
      const token = await getToken();
      return fetchTodos(arg, String(token));
    },
  });

  const completedTodos = todos?.filter((todo: TodoResponse) => todo.isCompleted === true) || [];
  const incompleteTodos = todos?.filter((todo: TodoResponse) => !todo.isCompleted) || [];

  return (
    <div className="container mx-auto px-6 bg-background">
      <div className="py-8 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
          <TodoCard totalTodos={completedTodos.length + incompleteTodos.length} completedTodos={completedTodos.length} />
          <ChartContainer config={chartConfig} className="w-full h-full hidden md:block">
            <BarChart
              accessibilityLayer
              data={[
                {
                  name: 'My Todos', // You can customize the name
                  remaining: incompleteTodos.length,
                  completed: completedTodos.length,
                },
              ]}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="remaining" fill="var(--color-remaining)" radius={4} />
              <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div className="mt-10 md:border-r px-3">
            <h3 className="py-4 text-left text-sm font-medium">REMAINING ({incompleteTodos.length})</h3>
            <div className="max-h-[310px] min-h-[100px] md:min-h-[280px] overflow-scroll">
              {isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error loading todos</p>
              ) : (
                incompleteTodos.map((todo: TodoResponse) => (
                  <Todo key={todo._id} id={todo._id} completed={todo.isCompleted} title={todo.title} />
                ))
              )}
            </div>
          </div>

          <div className="mt-8 md:border-l px-3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="1">
                <AccordionTrigger>COMPLETED ({completedTodos.length})</AccordionTrigger>
                <AccordionContent className="max-h-[310px] min-h-[100px] md:min-h-[280px] overflow-scroll">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>Error loading todos</p>
                  ) : (
                    completedTodos.map((todo: TodoResponse) => (
                      <Todo key={todo._id} id={todo._id} completed={todo.isCompleted} title={todo.title} />
                    ))
                  )}
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
  );
}

export default Detailed;