import { format } from "date-fns";
import Card from "../_component/Card";
import Footer from "../_component/Footer";
import Header from "../_component/header/Header";
import { getSearch } from "../_utils/api/search";
import { CardData } from "../_utils/types/card";
type SearchParams = {
  searchParams: {
    location: string;
    startDate: string;
    endDate: string;
    numberOfGuests: number;
  };
};
async function page({ searchParams }: SearchParams) {
  let range;
  if (searchParams.startDate && searchParams.endDate) {
    range = `${format(
      new Date(searchParams.startDate),
      "dd MMM yy"
    )} - ${format(new Date(searchParams.endDate), "dd MMM yy")}`;
  }
  const filter = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filters",
  ];
 const getSearch_:CardData = await getSearch()
 
  return (
    <>
      <Header
        placeholder={`${searchParams.location} | ${range} | ${searchParams.numberOfGuests} guests`}
      />
      <section className="py-6">
      <div className="container px-5 py-24 mx-auto">
      <p className="text-xs">
          300+ Stays - {range} - for {searchParams.numberOfGuests} guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in {searchParams.location}
        </h1>
        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-normal">
          {filter.map((item) => (
            <button
              key={item}
              className="px-4 py-2 border rounded-full 
              cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100
              transition transform duration-150 ease-out"
            >
              {item}
            </button>
          ))}
        </div>
      <div className="grid grid-cols-1 gap-8">
      {getSearch_.map((item) => (
          <Card key={item.img} {...item}/>
        ))}
      </div>
      </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
