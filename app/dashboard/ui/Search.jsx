import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import Button from "@/app/ui/Button";

const Search = () => {
  return (
    <>
      <div className="hidden md:flex justify-end gap-3 font-bold items-center md:text-xs lg:text-sm">
        <div className="flex border justify-between rounded-full items-center px-2 font-normal">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search"
            className="border-none outline-none p-2 w-44"
          />
          <CiSearch />
        </div>
        <FaRegBell className="text-2xl lg:text-3xl" />
        <IoIosSettings className="text-3xl lg:text-4xl" />
      </div>
      <span className="top-[5%] block md:hidden border-2">
        <MobileNavbar
          links={[
            "Community",
            "Analytics",
            "Help",
            "Notifications",
            "Settings",
          ]}
          btn={
            <Button
              extra={
                "bg-gradient-to-r from-[#E5760E] to-[#F68CFF] text-stone-700 font-bold text-black"
              }
            >
              <span>Create Vote</span>
            </Button>
          }
        />
      </span>
    </>
  );
};
export default Search;
