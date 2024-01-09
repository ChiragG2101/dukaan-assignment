import Header from "@/components/Header";
import OverviewCard from "@/components/OverviewCard";
import { columns } from "@/components/datatable/columns";
import { DataTable } from "@/components/datatable/data-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { transactionsData } from "@/lib/table-data";

const Payments = () => {
  return (
    <div className="mb-10">
      <Header headerTitle="Payments" />
      <div className="flex justify-between px-10 py-7">
        <h1 className="text-[#1A181E] font-semibold text-2xl">Overview</h1>
        <Select>
          <SelectTrigger
            defaultValue="Last Month"
            className="w-[180px] text-[#4D4D4D]"
          >
            <SelectValue placeholder="Last Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Last Month">Last Month</SelectItem>
            <SelectItem value="Last Week">Last Week</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-10 px-10 mb-10 md:flex-row">
        <OverviewCard title="Online orders" value={transactionsData.length} />
        <OverviewCard title="Amount received" value="₹23,92,312.19" />
      </div>
      <div className="px-10 py-5">
        <h1 className="text-[#1A181E] font-semibold text-2xl">
          Transactions | This Month
        </h1>
      </div>
      <div className="px-5 mx-10 bg-white rounded-lg">
        <DataTable columns={columns} data={transactionsData} />
      </div>
    </div>
  );
};

export default Payments;
