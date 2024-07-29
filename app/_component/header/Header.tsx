import SearchBar from '@/app/_component/header/SearchBar';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

function Header({placeholder}:{placeholder?:string}) {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md py-5'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-3 items-center'>
          <Link href={"/"} className='relative flex items-center h-5 sm:h-7 md:h-10'>
            <Image src="/airbnb.svg" alt="logo" fill className='object-contain object-left' priority/>
          </Link>
          <div className='flex-1 justify-center '>
            <SearchBar placeholder={placeholder}/>
          </div>
          <div className='hidden md:block'>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header