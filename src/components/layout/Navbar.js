import { Menu } from "lucide-react";


export default function Navbar() {
  return (
    <div className=" w-full fixed z-[999] ">
      <nav className=" py-2 px-6 flex items-center justify-between">
        <div className="">
          <img src="/RTV.png" alt="" className=" h-[90px]" />
        </div>
        <div className=" flex items-center justify-between">
          <div className=" px-4 py-2 border border-white text-white text-sm rounded-full flex items-center gap-1.5">
            <Menu className=" w-4 h-4" />
            MENU
          </div>
        </div>
      </nav>
    </div>
  );
}
