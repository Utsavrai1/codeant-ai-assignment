import { Button } from "@/components/ui/button";
import { github, bitbucket, azure, gitlab, key } from "@/assets";
import { useNavigate } from "react-router-dom";

interface AuthButtonsProps {
  activeTab: "SAAS" | "SELF_HOSTED";
}

export const AuthButtons = ({ activeTab }: AuthButtonsProps) => {
  return (
    <div className="flex flex-col items-center justify-start mt-6 min-h-[200px]">
      {activeTab === "SAAS" ? <SaasButtons /> : <SelfHostedButtons />}
    </div>
  );
};

const SaasButtons = () => (
  <div className="flex flex-col gap-4 w-full max-w-[400px]">
    <AuthButton icon={github} text="Sign in with Github" />
    <AuthButton icon={bitbucket} text="Sign in with Bitbucket" />
    <AuthButton icon={azure} text="Sign in with Azure DevOps" />
    <AuthButton icon={gitlab} text="Sign in with Gitlab" />
  </div>
);

const SelfHostedButtons = () => (
  <div className="flex flex-col gap-4 w-full max-w-[400px]">
    <AuthButton icon={gitlab} text="Self Hosted Gitlab" />
    <AuthButton icon={key} text="Sign in with SSO" />
  </div>
);

const AuthButton = ({ icon, text }: { icon: string; text: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 justify-center w-full"
      onClick={handleClick}
    >
      <img src={icon} alt={text.toLowerCase()} />
      {text}
    </Button>
  );
};
