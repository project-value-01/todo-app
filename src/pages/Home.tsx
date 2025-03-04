import Header from '@/components/Header';
import { TaskCard } from '@/components/TaskCard';
import { Button } from '@/components/ui/button';
import useModalStore from '@/store/states';
import TaskModal from '@/components/TaskModal';
import TodoModal from '@/components/TodoModal';
import TaskEditModal from '@/components/TaskEditModal';
import { useQuery } from '@tanstack/react-query';
import { fetchTasks, Task } from '@/api/tasks';
import { useAuth } from '@clerk/clerk-react';

function Home() {
  const { openTaskModal } = useModalStore();
  const { userId: clerkId, getToken } = useAuth();

  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ['tasks', clerkId],
    queryFn: async () => {
      const token = await getToken();
      return fetchTasks(String(clerkId), String(token))
    }
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
            tasks && tasks.map((task: Task) => (
              <TaskCard
                key={task._id}
                id={task._id}
                description={task.description || 'No description available'}
                background={task.background || "https://zenithtodobucket.s3.us-east-1.amazonaws.com/p1.jpg"}
                fillPercentage={40}
                totalTodos={10}
                completedTodos={5}
              />
            ))
          )}
        </div>
      </div>
      <TaskModal />
      <TodoModal />
      <TaskEditModal />
    </div>
  );
}

export default Home;