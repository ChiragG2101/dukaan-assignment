import { HelpCircle, Search } from "lucide-react";
import { Input } from "./ui/input";
import chatIcon from "@/assets/icons/Chat.png";
import dropdownIcon from "@/assets/icons/dropdown.png";
import MobileMenu from "./MobileMenu";
import MobileHeaderMenu from "./MobileHeaderMenu";

interface HeaderProps {
    headerTitle: string;
}

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <div className="flex justify-between py-3 px-10 bg-white border-b border-b-black">
        <div className="flex gap-5 mt-1.5">
            <div className="block xl:hidden">
                <MobileMenu />
            </div>
            <h1 className="text-[#1A181E] text-xl sm:text-base">{headerTitle}</h1>
            <div className="hidden sm:flex gap-1 mt-1">
                <HelpCircle className="text-[#4D4D4D]" size={18} />
                <h1 className="text-[#4D4D4D] font-normal text-sm">How it works</h1>
            </div>
        </div>
        <div className="hidden lg:block w-[400px] relative">
            <Search className="absolute mt-2.5 ml-2 text-[#999999]" size={20} />
            <Input 
                className="bg-[#F2F2F2] h-10 pl-8"
                placeholder="Search features, tutorials, etc."
            />
        </div>
        <div className="hidden sm:flex gap-3">
            <div className="bg-[#E6E6E6] p-3 rounded-full">
                <img src={chatIcon} alt="chat" className="h-4 w-4" />
            </div>
            <div className="bg-[#E6E6E6] p-2.5 rounded-full">
                <img src={dropdownIcon} alt="dropdown" className="px-0.5 mt-1.5" />
            </div>
        </div>
        <div className="flex sm:hidden ">
            <MobileHeaderMenu />
        </div>
    </div>
  )
}

export default Header