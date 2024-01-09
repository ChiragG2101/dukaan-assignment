import { sidebarMenuOptions } from "@/lib/sidebar-items"
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom"
import storePic from "@/assets/icons/StoreIcon.png"
import walletIcon from "@/assets/icons/wallet.png"
import { ChevronDown } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const { pathname } = location;
  
  return (
    <div className="bg-[#1E2640] w-full flex flex-col justify-between sm:py-5">
        <div>
            <div className="px-8 flex justify-between mb-5">
                <div className="flex gap-5">
                    <img src={storePic} alt="store" width="39px" height="39px" className="rounded" />
                    <div>
                        <h1 className="text-white">Nishyan</h1>
                        <h1 className="text-white/40 underline text-sm">Visit store</h1>
                    </div>
                </div>
                <ChevronDown className="my-2 text-white" size={30} />
            </div>
            <div className="px-4 flex flex-col gap-2">
                {sidebarMenuOptions.map((option) => (
                    <Link to={option.navigateTo} key={option.id} className={cn("flex gap-5 hover:bg-zinc-400 py-2 px-5 rounded-lg",
                        pathname === option.navigateTo && "bg-[#FFFFFF1A]"
                    )}>
                        <img src={option.icon} alt={option.label} className="h-5 w-5" />
                        <h1 className="text-white">{option.label}</h1>
                    </Link>
                ))}
            </div>
        </div>
        <div className="flex gap-5 bg-[#353C53] mx-5 py-2 px-5 rounded-lg">
            <div className="bg-[#FFFFFF1A] flex flex-col py-3 px-2 rounded-lg">
                <img src={walletIcon} alt="wallet" className="h-6 w-7" />
            </div>
            <div>
                <h1 className="text-[#FFFFFF] text-sm">Available credits</h1>
                <h1 className="text-[#FFFFFF] font-medium">222.10</h1>
            </div>
        </div>
    </div>
  )
}

export default Sidebar