import { TaskCard } from '@/components/TaskCard'
// import path from 'node:path'

const images = [
  {
    image: "/p1.jpg"
  },
  {
    image: "/p2.jpg"
  },
  {
    image: "/p3.jpg"
  },
  {
    image: "/p4.jpg"
  },
  {
    image: "/p5.jpg"
  },
  {
    image: "/p6.jpg"
  },
  {
    image: "/p7.jpg"
  },
  {
    image: "/p8.jpg"
  }
]

function Home() {

  return (
    <div className='container mx-auto px-7 bg-background'>
      <div className='py-8 grid grid-cols-1 gap-2 min-[810px]:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] min-[810px]:gap-5'>
        {/* <TaskCard image='p11.jpg'/>
        <TaskCard image='p2.jpg'/>
        <TaskCard image='p5.jpg'/>
        <TaskCard image='p8.jpg'/>
        <TaskCard image='p15.jpg'/>
        <TaskCard image='p13.jpg'/> */}
        {images.map((img, idx) => (
          <TaskCard key={idx} image={img.image} />
        ))}
      </div>
    </div>
  )
}

export default Home