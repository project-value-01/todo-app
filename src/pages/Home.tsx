import Header from '@/components/Header'
import { TaskCard } from '@/components/TaskCard'

function Home() {

  return (
    <div className='container mx-auto px-7 bg-background py-8 sm:py-14'>
      <Header>Tasks</Header>
      <div className='py-8 grid grid-cols-1 gap-8 min-[810px]:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] min-[810px]:gap-9'>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </div>
    </div>
  )
}

export default Home