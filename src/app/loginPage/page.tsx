import Google from '../../../Images/google.png'
import Image from "next/image"

export default function LoginPage() {
    return (
        <div className="bg-white h-[100vh]  w-full flex items-center justify-center">
            <div className="h-[60%] w-[24%] rounded bg-white border border-gray-200 flex flex-col justify-center items-center">
                <div className='h-[40px] w-[80%] border flex items-center justify-center rounded'>
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
                    <input className='border w-full h-[40px] px-3 rounded text-[12px]' placeholder='email@example.com'/>
                </div>
                <div className='w-[80%] flex flex-col my-2'>
                    <p className='my-1 text-[14px] font-semibold my-2'>Password</p>
                    <input className='border w-full h-[40px] px-3 rounded text-[12px]' placeholder='Must be at least 6 character'/>
                </div>
                <p className='text-[12px] font-semibold my-2 relative left-[80px]'>Forget Password?</p>
                <div className='h-[40px] w-[80%] border flex items-center justify-center rounded'>
                    <p className='font-semibold text-[15px]'>Login</p>
                </div>
            </div>
        </div>
    )
}