import Web from '../../../Images/WebDevelopmentBanner.png'
import Image from 'next/image'
import data from '../../../constants/data'

const ItemCard = ({item,id}) => {
    return (
        <div className="h-[330px] w-[25%] rounded-md shadow-md flex flex-col justify-center my-4">
            <div className='w-full flex  justify-center items-center mb-2'>
                <Image
                    src={Web}
                    alt='Web Development Image'
                    className='h-[200px] w-[90%] rounded-md'
                />
            </div>
            <p className='text-[18px] mx-6 text-[#000000] font-bold my-2 '>{item.course_name}</p>
            <p className='mx-6 text-[12px] text-[#808080CC] '>{item.description}</p>
        </div>
    )
}
export default function HomePage() {
    return (
        <div className="h-[100%] w-full bg-white flex  flex-col p-12">
            <p className='text-[#013098] text-[20px] font-bold'>List of Courses</p>
            <div className='flex-wrap flex items-center gap-10'>   
            {
                data.map((item,id) => {
                    return <ItemCard item={item} id={id} />
                })
            }
            </div>

        </div>
    )
}
