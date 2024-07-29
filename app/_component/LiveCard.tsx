import Image from 'next/image';
import { LiveItem } from "../_utils/types/live_data";

type LiveItemProps = LiveItem;
    

function LiveCard({img,title}:LiveItemProps) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative h-80 w-80'>
        <Image src={img} alt="live-image" fill className="object-cover rounded-lg"/>
      </div>
      <h2 className='text-lg'>{title}</h2>
    </div>
  )
}

export default LiveCard
