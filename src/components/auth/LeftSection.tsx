import { codeantai_grey } from "@/assets";
import { StatsCard } from "./StatsCard";
import { MetricsCard } from "./MetricsCard";

export const LeftSection = () => {
  return (
    <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center bg-white">
      <div className="h-[322px] w-[90%] max-w-[474px] relative">
        <StatsCard />
        <MetricsCard />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={codeantai_grey} alt="logo" className="h-60" />
      </div>
    </div>
  );
};
