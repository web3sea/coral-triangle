
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";

const agentPages = [
  { value: "homestay", label: "Homestay", path: "/agents/homestay" },
  { value: "liveaboard", label: "Liveaboard", path: "/agents/liveaboard" },
  { value: "freediving", label: "Freediving", path: "/agents/freediving" },
  { value: "dive-shop", label: "Dive Shop", path: "/agents/dive-shop" },
  { value: "dive-resort", label: "Dive Resort", path: "/agents/dive-resort" },
];

export const AgentTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentTab = () => {
    const currentPage = agentPages.find(page => page.path === location.pathname);
    return currentPage?.value || "homestay";
  };

  const handleTabChange = (value: string) => {
    const selectedPage = agentPages.find(page => page.value === value);
    if (selectedPage) {
      navigate(selectedPage.path);
    }
  };

  return (
    <Tabs value={getCurrentTab()} onValueChange={handleTabChange} className="mb-8">
      <TabsList
        className="
   items-center h-fit
    bg-entreprenology-bg/50 border border-entreprenology-turquoise/20
    flex flex-nowrap overflow-x-auto overflow-y-hidden thin-scrollbar py-2
    md:grid md:grid-cols-5 md:w-full md:overflow-x-visible
  "
      >
        {agentPages.map((page) => (
          <TabsTrigger
            key={page.value}
            value={page.value}
            className="tabs-trigger-custom min-w-[120px] whitespace-nowrap data-[state=active]:bg-entreprenology-turquoise/20 data-[state=active]:text-entreprenology-turquoise text-gray-300 hover:text-white transition-colors"
          >
            {page.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
