import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import { Tweet } from '@/typings';
import { client } from '@/sanity/lib/client';
import { feedQuery } from '@/sanity/lib/queries'
import { Toaster } from 'react-hot-toast';


export default async function Home() {
  
  const tweets:Tweet[] = await client.fetch(feedQuery)



  return (
  <div className='max-h-screen overflow-hidden lg:max-w-6xl mx-auto'>
    <Toaster/>
    <main className='grid grid-cols-9'>
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed tweets = {tweets}/>

      {/* widgets */}
      <Widgets />

    </main>
  </div>
    
  )
}
