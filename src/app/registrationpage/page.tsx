'use client'
import Link from 'next/link'
import Google from '../../../Images/google.png'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function RegistrationPage() {
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const supabase = createClientComponentClient()
    const router = useRouter()
    const handleSignUp = async () => {
        await supabase.auth.signUp({
          email,
          password,
        //   options: {
        //     emailRedirectTo: `${location.origin}/auth/callback`,
        //   },
        }).then((res)=>{console.log(res)})
        // router.refresh()
      }
      const [email, setEmail] = useState('')
    return (
        <div className="bg-white h-[100vh]  w-full flex items-center justify-center">
            <div className="h-[70%] w-[24%] rounded bg-white border border-gray-200 flex flex-col justify-center items-center">
                <p className='text-[15px] font-bold cursor-pointer'>Create New Account</p>
                <div className='w-[80%] flex flex-col mt-2'>
                    <p className='my-1 text-[12px] font-semibold'>Email</p>
                    <input className='border w-full h-[40px] px-3 rounded text-[12px]' placeholder='email@example.com' onChange={(event)=>{setEmail(event.target.value)}} />
                </div>
                <div className='w-[80%] flex flex-col mt-2'>
                    <p className='my-1 text-[12px] font-semibold '>Password</p>
                    <input className='border w-full h-[40px] px-3 rounded text-[12px]' placeholder='Must be at least 6 character' onChange={(event)=>{setPassword(event.target.value)}}  />
                </div>
                <div className='w-[80%] flex flex-col my-2'>
                    <p className='my-1 text-[12px] font-semibold '>Re-Password</p>
                    <input className='border w-full h-[40px] px-3 rounded text-[12px]' placeholder='Must be at least 6 character' onChange={(event)=>{setRePassword(event.target.value)}}  />
                </div>
                <div className='h-[40px] w-[80%] border flex items-center justify-center rounded mt-3' onClick={handleSignUp}>
                    <p className='font-semibold text-[15px] cursor-pointer'>Sign Up</p>
                </div>
                <div className='flex items-center w-[80%] my-4 justify-center'>
                    <div className='w-[45%] border border-gray-200'></div>
                    <p className='mx-2 text-[#525252] text-[12px] '>or</p>
                    <div className='w-[45%] border border-gray-200'></div>
                </div>
                <div className='h-[40px] w-[80%] border flex items-center justify-center rounded'>
                    <Image
                        src={Google}
                        alt='Google Icon'
                        className='h-[15px] w-[15px] rounded-full mx-2'
                    />
                    <p className='font-semibold text-[13px]'>Sign up with Google</p>
                </div>
                <div className='flex h-[30px] items-center bg-gray mt-2'>
                    <p className='text-[10px]'>Already have an account?</p>
                    <Link href={'/loginPage'}>
                    <p className='text-[11px] mx-2 underline font-bold cursor-pointer'>Sign in </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}