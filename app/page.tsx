import Feed from '@/components/Feed'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import { createClient, groq } from 'next-sanity'
// import { PortableText } from '@portabletext/react';




const clientConfig ={
  projectId: 'zx80sy3h',
  dataset:'production',
  useCdn: false,
}

// function getWence () {
//   return createClient(clientConfig).fetch(groq`
//     *[_type=='wence']{
//       _id,
//       'alt': image.alt,
//       'slug': slug.current,
//       'image': image.asset->url,
//       content,
//       ...
//     }
//   `)
// }



export default async function Home() {

  // const wence = await getWence();


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
