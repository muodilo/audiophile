
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowForwardIos } from "react-icons/md";

const Categories = () => {
  return (
    <div className='grid grid-cols-3 bg-[#fafafa] gap-7 pb-10 pt-20 lg:px-52 px-5 rounded-lg'>

        <div className='bg-[#f1f1f1] text-center  rounded-lg flex justify-center items-center relative'>
            <div className='pt-20 pb-7'>
                <h3 className='font-bold mb-3'>HEADPHONES</h3>
                <Link href={'/category/headphones'} className='flex items-center justify-center gap-1'>
                <p className='hover:text-[#d87d4a] text-sm text-neutral-600'>SHOP</p>
                <MdArrowForwardIos className='text-[#d87d4a]'/>
                </Link>
            </div>
            <Image className='absolute -top-14 w-33' alt='head phone' width={100} height={100} src={"/images/image-headphones.png"}/>
        </div>


        <div className='bg-[#f1f1f1] text-center  rounded-lg flex justify-center items-center relative'>
            <div className='pt-20 pb-7'>
                <h3 className='font-bold mb-3'>SPEAKERS</h3>
                <Link href={'/category/speakers'} className='flex items-center justify-center gap-1'>
                <p className='hover:text-[#d87d4a] text-sm text-neutral-600'>SHOP</p>
                <MdArrowForwardIos className='text-[#d87d4a]'/>
                </Link>
            </div>
            <Image className='absolute -top-14 w-20' alt='speakers' width={100} height={100} src={"/images/image-speaker-zx9_1.png"}/>
        </div>


        <div className='bg-[#f1f1f1] text-center  rounded-lg flex justify-center items-center relative'>
            <div className='pt-20 pb-7'>
                <h3 className='font-bold mb-3'>EARPHONES</h3>
                <Link href={'/category/earphones'} className='flex items-center justify-center gap-1'>
                <p className='hover:text-[#d87d4a] text-sm text-neutral-600'>SHOP</p>
                <MdArrowForwardIos className='text-[#d87d4a]'/>
                </Link>
            </div>
            <Image className='absolute -top-14 w-40' alt='speakers' width={100} height={100} src={"/images/image-earphones.png"}/>
        </div>





    </div>
  )
}

export default Categories