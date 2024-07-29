import { getLiveData } from "@/app/_utils/api/live";
import { LiveData } from "../_utils/types/live_data";
import LiveCard from "./LiveCard";
async function Live() {
  const liveData: LiveData = await getLiveData();
  return (
    <section className="py-6">
      <div className="container mx-auto px-5 md:px-12">
       <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
       {liveData.map((item)=><LiveCard key={item.img} img={item.img} title={item.title}/>)}
       </div>
      </div> 
    </section>
  );
}

export default Live;
