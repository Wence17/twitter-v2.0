import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
export default function Home() {
  return (
  <div className='max-h-screen overflow-hidden lg:max-w-6xl mx-auto'>
    <main className='grid grid-cols-9'>
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />

    </main>
  </div>
    
  )
}
