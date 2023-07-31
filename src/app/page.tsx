'use client'
import SearchIcon from '../../Images/u_search.png'
import PremiumIcon from '../../Images/ic_round-workspace-premium.png'
import Image from 'next/image'
import data from '../../constants/data'
import Link from 'next/link'
import { useState } from 'react'



const ItemCard = ({ item, index }) => {
  return (
    <Link
      href={`/detailPage/${item.id}`}
      className="h-[330px] w-[25%] rounded-md shadow-md flex flex-col justify-center my-4">
      <div className='rounded-md h-[200px] w-[90%] flex mx-auto relative mb-2'>
        <Image
          src={item.image_link}
          alt='Web Development Image'
          fill={true}
          quality={100}
          className=' rounded-md'
        />
        {
          item.course_type == "premium" &&
          <div className='h-[35px] w-max bg-[#FFA500] p-4 rounded-2xl items-center top-[20px] left-[10px] relative justify-center z-[1] flex'>
            <Image
              src={PremiumIcon}
              alt='Premium Icon'
              className='h-[25px] w-[25px] rounded-full'
            />
            <p className='text-[16px] text-[#FFFFFF] font-bold mx-1'>Premium</p>
          </div>
        }
      </div>
      <p className='text-[18px] mx-6 text-[#000000] font-bold my-2 '>{item.course_name}</p>
      <p className='mx-6 text-[12px] text-[#808080CC] '>{item.description}</p>
    </Link>
  )
}
export default function HomePage() {
  const [courseList, setCourseList] = useState(data)
  const [searchValue, SetSearchValue] = useState('')
  const handleInputChange = (event) => {
    SetSearchValue(event.target.value)
    console.log(searchValue)
  }
  const handleSearch = () =>{
   const filteredData =  data.filter((item)=>{
    //  return (item.course_name.toLowerCase() === searchValue.toLowerCase()
    return(item.course_name.toLowerCase().includes(searchValue.toLowerCase()))
    })
    console.log(filteredData,searchValue)
    setCourseList(filteredData)
  }
  return (
    <div className="h-[100%] w-full bg-white flex  flex-col p-12">
      <div className='flex items-center justify-between'>
        <p className='text-[#013098] text-[20px] font-bold'>List of Courses</p>
        <div className='h-[40px] w-[20%] flex  mr-8 relative items-center px-4 border rounded-md border-[#D4D4D4]'>
          <input placeholder='Search Content' className='placeholder-[#000000] text-[12px] h-full w-full ml-2 outline-none' onChange={handleInputChange} />
          <Image
            src={SearchIcon}
            alt='search icon'
            className='h-[18px] w-[18px]'
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className='flex-wrap flex items-center gap-10'>
        {
          courseList.map((item, index) => {
            return <ItemCard item={item} index={index} />
          })
        }
      </div>

    </div>
  )
}
