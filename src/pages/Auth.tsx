import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { codeantai } from "@/assets";
import { LeftSection } from "@/components/auth/LeftSection";
import { TabSelector } from "@/components/auth/TabSelector";
import { AuthButtons } from "@/components/auth/AuthButtons";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<"SAAS" | "SELF_HOSTED">("SAAS");

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      <LeftSection />

      <div className="w-full md:w-1/2 bg-[#F5F5F5] flex flex-col items-center justify-center min-h-screen px-4">
        <Card className="shadow-lg w-full max-w-[500px] min-h-[400px] bg-white">
          <CardHeader>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={codeantai}
                  alt="CodeAnt AI Logo"
                  className="h-6 w-6"
                />
                <h2 className="text-[#081735] font-normal text-xl">
                  CodeAnt AI
                </h2>
              </div>
              <h3 className="text-[#181D27] text-lg md:text-xl font-semibold text-center">
                Welcome to CodeAnt AI
              </h3>
            </div>
          </CardHeader>

          <CardContent>
            <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
            <Separator />
            <AuthButtons activeTab={activeTab} />
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-xs">
          By signing up you agree to the{" "}
          <span className="font-semibold">Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
};

export default Auth;
