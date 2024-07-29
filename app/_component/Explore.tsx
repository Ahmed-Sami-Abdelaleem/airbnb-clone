import { getExplore } from "../_utils/api/explore";
import { ExploreData } from "../_utils/types/explore_data";
import ExploreCard from "./ExploreCard";
async function Explore() {
  const exploreDate: ExploreData = await getExplore();
  
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl font-semibold my-5">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreDate.map((item) => (
            <ExploreCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
