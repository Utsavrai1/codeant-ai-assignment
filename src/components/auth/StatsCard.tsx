import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { codeantai } from "@/assets";

export const StatsCard = () => {
  return (
    <Card className="absolute top-0 left-0 h-[170px] w-full">
      <CardHeader>
        <div className="flex items-start gap-2">
          <img src={codeantai} alt="CodeAnt AI Logo" className="h-6 w-6" />
          <h2 className="text-[#081735] text-lg font-bold">
            AI to Detect & Autofix Bad Code
          </h2>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex justify-between mt-4">
        <StatItem value="30+" label="Language Support" />
        <StatItem value="10K+" label="Developers" />
        <StatItem value="100K+" label="Hours Saved" />
      </CardContent>
    </Card>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <h3 className="text-[#081735] text-lg font-bold">{value}</h3>
    <p className="text-sm">{label}</p>
  </div>
);
