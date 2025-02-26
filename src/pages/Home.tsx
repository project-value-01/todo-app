import Header from '@/components/Header'
import { TaskCard, TaskCardProps } from '@/components/TaskCard'
import { Button } from '@/components/ui/button'
import useModalStore from '@/store/states'
import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { useAuth } from '@clerk/clerk-react'
import TaskModal from '@/components/TaskModal'
import TodoModal from '@/components/TodoModal'
import TaskEditModal from '@/components/TaskEditModal'


function Home() {
  const {openTaskModal} = useModalStore()
  const {userId: clerkId} = useAuth();

  // Fetch tasks
  const { data, isLoading, error } = useQuery({
      queryKey: ['tasks'],
      queryFn: async () => {
        const response = await api.get(`/task/${clerkId}`);
        return response.data;
      },
  });

  return (
    <div className='container mx-auto px-7 bg-background'>
      <div className='py-8 md:py-20'>
        <div className='flex justify-between items-center'>
          <Header>Tasks</Header>
          <Button className='cursor-pointer active:scale-125 transition' onClick={openTaskModal}>Create Task</Button>
        </div>
        <div className='py-8 grid grid-cols-1 gap-8 min-[810px]:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] min-[810px]:gap-9'>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading tasks</p>
          ) : (
            data && data.map((task: TaskCardProps) => (
              <TaskCard
                key={task.id}
                description={task.description}
                background={task.background}
                fillPercentage={40}
                totalTodos={10}
                completedTodos={5}
              />
            ))
          )}
          <TaskCard description='Zargos mountain in iran is one of the best' background='/p2.jpg' fillPercentage={40} totalTodos={10} completedTodos={5} />
          <TaskCard description='fdksjf' background='/p4.jpg' fillPercentage={40} totalTodos={10} completedTodos={5} />
          <TaskCard description='IFGHML is bae' background='/p1.jpg' fillPercentage={40} totalTodos={10} completedTodos={5} />
          <TaskCard description='fdksjf' background='/p3.jpg' fillPercentage={40} totalTodos={10} completedTodos={5} />
        </div>
      </div>
      <TaskModal />
      <TodoModal />
      <TaskEditModal />
    </div>
  )
}

export default Home