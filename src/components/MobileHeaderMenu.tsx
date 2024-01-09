import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import dropdownIcon from "@/assets/icons/dropdown.png";
import { Separator } from "./ui/separator";

const MobileHeaderMenu = () => {
  return (
    <Popover>
        <PopoverTrigger>
            <div className="bg-[#E6E6E6] p-3 rounded-full">
                <img src={dropdownIcon} alt="dropdown" className="h-2.5 w-2.5 mt-0.5" />
            </div>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2 w-[200px]">
            <Button variant="ghost">
                Search
            </Button>
            <Separator />
            <Button variant="ghost">
                Messages
            </Button>
        </PopoverContent>
    </Popover>
  )
}

export default MobileHeaderMenu