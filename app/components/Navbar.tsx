import Logo from './Logo'
import Link from 'next/link'
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='lg:px-52 px-5 bg-foreground text-white'>
        {/* desktop */}
        <div className=' border-b border-neutral-700 py-8 flex items-center justify-between '>
            <Logo/>
            <ul className='flex items-center font-bold gap-7 text-sm tracking-widest'>
                <li>
                    <Link className='text-[#d87d4a]' href={'/'}>HOME</Link>
                </li>
                <li>
                    <Link className='' href={'/'}>HEADPHONES</Link>
                </li>
                <li>
                    <Link className='' href={'/'}>SPEAKERS</Link>
                </li>
                <li>
                    <Link className='' href={'/'}>EARPHONES</Link>
                </li>
            </ul>
            <div className='relative'>
                < BsCart3  className='text-2xl'/>
                <div className='absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center text-xs bg-[#d87d4a] rounded-full'>1</div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar