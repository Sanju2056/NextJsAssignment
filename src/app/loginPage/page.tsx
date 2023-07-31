'use client'
import Link from 'next/link'
import Google from '../../../Images/google.png'
import Image from "next/image"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const supabase = createClientComponentClient()
    const router = useRouter()
    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
          email,
          password,
        }).then((res)=>{
            let accessToken = res.data.session?.access_token
            console.log(accessToken)
            localStorage.setItem("accessToken",accessToken)
            router.push('/')
        })
        
        // router.refresh()
      }
    return (
        <div className="bg-white h-[100vh]  w-full flex items-center justify-center">
            <div className="h-[62%] w-[24%] rounded bg-white border border-gray-200 flex flex-col justify-center items-center">
                <div className='h-[40px] w-[80%] border flex items-center justify-center rounded cursor-pointer'>
                    <Image
                    src={Google}
                    alt='Google Icon'
                    className='h-[15px] w-[15px] rounded-full mx-2'
                    />
                    <p className='font-semibold text-[13px]'>Login with Google</p>
                </div>
                <div className='flex items-center w-[80%] my-4 justify-center'>
                    <div className='w-[45%] border border-gray-200'></div>
                    <p className='mx-2 text-[#525252] text-[12px] '>or</p>
                    <div className='w-[45%] border border-gray-200'></div>
                </div>
                <div className='w-[80%] flex flex-col'>
                    <p className='mb-1 text-[14px] font-semibold'>Email</p>
                    <input className='border w-full h-[40px] px-3 rounded text-[12px]' placeholder='email@example.com' onChange={(event)=>{setEmail(event.target.value)}} />
                </div>
                <div className='w-[80%] flex flex-col my-2'>
                    <p className='my-1 text-[14px] font-semibold my-2'>Password</p>
                    <input className='border w-full h-[40px] px-3 rounded text-[12px]' placeholder='Must be at least 6 character' onChange={(event)=>{setPassword(event.target.value)}} />
                </div>
                <p className='text-[12px] font-semibold my-2 relative left-[80px]'>Forget Password?</p>
                <div className='h-[40px] w-[80%] border flex items-center justify-center rounded'>
                    <p className='font-semibold text-[15px] cursor-pointer' onClick={handleSignIn}>Login</p>
                </div>
                <div className='flex mt-4 items-center'>
                <p className='text-[10px]'>Create New Account !</p>
                <Link href={'/registrationpage'}>
                <p className='text-[10px] mx-2 underline cursor-pointer font-bold'>Register Now</p>
                </Link>
                </div>
              
            </div>
        </div>
    )
}