import { TaskCard } from '@/components/TaskCard'

function Home() {

  return (
    <div className='container mx-auto px-7 bg-background'>
      <div className='py-8 grid grid-cols-1 gap-2 min-[810px]:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] min-[810px]:gap-5'>
        <TaskCard/>
      </div>
    </div>
  )
}

export default Home