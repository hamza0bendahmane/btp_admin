import PageDescription from "@/components/PageDescription";
import ClientContentSection from "@/components/sections/ClientContentSection";
import SeparatorSection from "@/components/sections/SeparatorSection";
import StatisticCardSection from "@/components/sections/StatisticCardSection";
import { Button } from "@/components/ui/Botton";
import { Icons } from "@/components/ui/Icons";

export default function Client() {
  return (
    <main className="h-[100vh] px-10 py-2 flex gap-2 flex-col">
      <PageDescription text="Statistiques générales" />
      <StatisticCardSection />
      <SeparatorSection title="vendeurs">
        <Button className="rounded-none gap-2 capitalize font-medium px-6">
          Export Csv
          <Icons.TbFileExport />
        </Button>
      </SeparatorSection>
      <ClientContentSection />
    </main>
  );
}
