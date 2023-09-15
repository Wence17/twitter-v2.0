'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const SigninButton = () => {
    const {data: session} = useSession()

    if(session && session.user) {
        return (
        <div className='flex gap-4 ml-auto'>
            <p className='text-sky-600'>Signed in as {session.user.name}</p> <br/>
            <button onClick={() => signOut()} className='text-red-600'>Sign out</button>
        </div>
    )}
    return <>
       <div className='flex gap-4 ml-auto'>
            <p className='text-sky-600'> Not signed in </p><br/>
            <button onClick={() => signIn()} className='text-green-600'>Sign in</button>
        </div>
    </>
}

export default SigninButton