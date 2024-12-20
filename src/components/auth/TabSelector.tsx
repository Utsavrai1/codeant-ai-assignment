interface TabSelectorProps {
  activeTab: "SAAS" | "SELF_HOSTED";
  setActiveTab: (tab: "SAAS" | "SELF_HOSTED") => void;
}

export const TabSelector = ({ activeTab, setActiveTab }: TabSelectorProps) => {
  return (
    <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg mb-6">
      <TabButton
        isActive={activeTab === "SAAS"}
        onClick={() => setActiveTab("SAAS")}
        text="SAAS"
      />
      <TabButton
        isActive={activeTab === "SELF_HOSTED"}
        onClick={() => setActiveTab("SELF_HOSTED")}
        text="Self Hosted"
      />
    </div>
  );
};

const TabButton = ({
  isActive,
  onClick,
  text,
}: {
  isActive: boolean;
  onClick: () => void;
  text: string;
}) => (
  <button
    className={`w-1/2 py-2 rounded-lg ${
      isActive ? "bg-blue-500 text-white" : "bg-transparent text-gray-600"
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);
