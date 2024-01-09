import { Card, CardContent } from "./ui/card";

interface OverviewCardProps {
    title: string;
    value: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => {
  return (
    <Card className="w-full lg:w-[50%]">
        <CardContent className="flex flex-col gap-5 py-7">
            <h1 className="text-[#4D4D4D] text-base">{title}</h1>
            <h1 className="text-[#1A181E] text-4xl font-semibold">{value}</h1>
        </CardContent>
    </Card>
  )
}

export default OverviewCard