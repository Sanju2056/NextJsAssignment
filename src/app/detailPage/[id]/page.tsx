'use client'
import Web from '../../../../Images/WebDevelopmentBanner.png'
import Image from 'next/image'
import data from '../../../../constants/data'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'


const DetailPageCard = ({ item }) => {
    const [activeLink, setActiveLink] = useState('')
    return (<>
        <p className='pt-14 pl-14 text-[22px] text-[#013098] font-bold'>{item.course_name}</p>
        <div className='h-[80%] w-[80%] flex my-4 ml-14'>
            <div className=' h-full w-[70%] flex flex-col '>
                <div className='h-[500px] w-[100%] relative bg-black  rounded-md'>
                    {
                        !activeLink ? <Image
                            src={item.image_link}
                            fill={true}
                            quality={100}
                            alt='Web Development Thumbnail'
                            className=' rounded-md' /> : <iframe
                            src={`https://www.youtube.com/embed/${activeLink.split("=").pop()}`}
                            height={500}
                            width={840}
                        />
                    }

                </div>
                <div className='h-[20%] pt-4'>
                    <p className='text-[18px] font-bold '>Description</p>
                    <p className='text-[#808080] text-[12px]'>{item.description}</p>
                </div>
            </div>
            <div className='rounded h-[300px] w-[30%] ml-8 shadow'>
                <p className='font-bold text-[18px] ml-4 mt-4'>Video Links</p>
                <div className='pl-4 '>
                    {
                        item.video_links.map((link,index)=>{    
                            return <div>
                        <p className='text-[#808080] text-[12px] mt-2 font-semibold'>Link {index+1}</p>
                        <div className='h-[30px] w-max shadow p-2 rounded-md text-[12px] cursor-pointer' onClick={()=>{
                            setActiveLink(link)
                        }}>
                            {link}
                        </div>
                    </div>
                        })
                    }
                </div>
                {/* <iframe className='h-[300px] w-[100%]' src='https://www.youtube.com/embed/f79MRyMsjrQ'/>  */}
            </div>
        </div>
    </>

    )

}
export default function DetailPage() {

    const [courseData, setCourseData] = useState()
    const { id } = useParams();
    console.log(id)
    // console.log(x,id)
    useEffect(() => {
        let x = data.filter((item) => {
            return item.id == id;
        })
        setCourseData(x[0])
    }, [id])

    return (
        <div className='h-[100%] w-[100%] bg-white' >
            {courseData && <DetailPageCard item={courseData} />}
        </div>
    )
}