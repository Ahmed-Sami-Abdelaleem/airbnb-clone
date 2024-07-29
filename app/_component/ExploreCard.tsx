import Image from 'next/image'
import { ExploreItem } from "../_utils/types/explore_data"
type ExploreItemProps = ExploreItem

async function ExploreCard({img,location,distance}:ExploreItemProps) {

  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
       <div className="relative h-16 w-16">
        <Image src={img} alt="explore-image" fill className="object-cover rounded-lg" />
       </div>
       <div>
        <h2 className='text-lg'>{location}</h2>
        <h3 className='text-sm text-gray-500'>{distance}</h3>
       </div>
    </div>
  )
}

export default ExploreCard
