
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";

const automationPages = [
  { value: "guest-booking-assistant", label: "Guest Booking", path: "/automations/guest-booking-assistant" },
  { value: "sales-admin", label: "Sales Admin", path: "/automations/sales-admin" },
  { value: "guest-invoicing", label: "Guest Invoicing", path: "/automations/guest-invoicing" },
  { value: "voice-agent-qualifier", label: "Voice Agent", path: "/automations/voice-agent-qualifier" },
  { value: "marketing-drip", label: "Marketing Drip", path: "/automations/marketing-drip" },
];

export const AutomationTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentTab = () => {
    const currentPage = automationPages.find(page => page.path === location.pathname);
    return currentPage?.value || "guest-booking-assistant";
  };

  const handleTabChange = (value: string) => {
    const selectedPage = automationPages.find(page => page.value === value);
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
        {automationPages.map((page) => (
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