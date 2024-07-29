"use client";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

type SelectionRange = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: "selection";
};
function SearchBar({ placeholder }: { placeholder?: string }) {
  const [searchInput, setSearchInput] = useState("");
  const [selectionRange, setSelectionRange] = useState<SelectionRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  return (
    <>
      <div className="flex items-center border-2 p-2 rounded-full">
        {
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder={placeholder || "Start your search"}
            className="text-sm text-gray-600 placeholder-gray-400 flex-grow bg-transparent outline-none"
          ></input>
        }
        <MagnifyingGlassIcon className="h-3 w-3 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 bg-red-400 text-white rounded-full p-2 cursor-pointer" />{" "}
      </div>
      {searchInput && (
        <div className="bg-red-200 absolute top-[100%] left-[50%] translate-x-[-50%]">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={(ranges: RangeKeyDict) => {
              setSelectionRange({
                startDate: ranges.selection.startDate,
                endDate: ranges.selection.endDate,
                key: "selection",
              });
            }}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />
          <div className="flex flex-col bg-white px-6">
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                {" "}
                Number of guests
              </h2>
              <UserIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
                value={numberOfGuests}
                min={1}
                onChange={(e) => setNumberOfGuests(e.target.valueAsNumber)}
              />
            </div>
            <div className="flex  items-center justify-between mb-4">
              <button
                type="button"
                className="w-full text-gray-500"
                onClick={() => {
                  setSearchInput("");
                }}
              >
                Cancel
              </button>
              <Link
                href={`/search?location=${searchInput}&startDate=${selectionRange.startDate}&endDate=${selectionRange.endDate}&numberOfGuests=${numberOfGuests}`}
                onClick={() => setSearchInput("")}
                className="w-full  text-red-400"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;
