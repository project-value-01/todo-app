import Header from '@/components/Header'
import { TaskCard } from '@/components/TaskCard'
import { Modal} from '@/components/Modal'
import { Button } from '@/components/ui/button'

function Home() {


  return (
    <div className='container mx-auto px-7 bg-background'>
      <div className='py-8 md:py-20'>
        <div className='flex justify-between items-center'>
          <Header>Tasks</Header>
          <Modal ModalTitle="Create Task" ModalDescription="Create a new task, and click save when you're done">
            <Button className='cursor-pointer active:scale-125 transition'>Create Task</Button>
          </Modal>
        </div>
        <div className='py-8 grid grid-cols-1 gap-8 min-[810px]:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] min-[810px]:gap-9'>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
        </div>
      </div>
    </div>
  )
}

export default Home