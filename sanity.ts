import { createClient } from 'next-sanity'


export const sanityClient = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-07-05',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hwzlke3k',
  useCdn:true,
})
