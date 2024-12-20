import { piechart } from "@/assets";
import { Card, CardContent } from "@/components/ui/card";

export const MetricsCard = () => {
  return (
    <Card className="absolute bottom-5 -right-8 h-[150px] w-[270px]">
      <CardContent>
        <div className="flex justify-between items-start pt-4">
          <img src={piechart} alt="Pie Chart Icon" className="h-14 w-14" />
          <div className="text-left">
            <h3 className="text-[#0049C6] text-base font-bold">↑ 14%</h3>
            <p className="text-sm">This week</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-bold">Issues Fixed</p>
          <p className="text-[#081735] text-xl font-bold">500K+</p>
        </div>
      </CardContent>
    </Card>
  );
};
