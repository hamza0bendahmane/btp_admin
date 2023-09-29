import PageDescription from "@/components/PageDescription";
import StaticsCard from "@/components/cards/StasticsCard";
import ContentSection from "@/components/sections/ContentSection";
import SeparatorSection from "@/components/sections/SeparatorSection";
import StatisticCardSection from "@/components/sections/StatisticCardSection";
import { Button } from "@/components/ui/Botton";
import { Icons } from "@/components/ui/Icons";

export default function Client() {
  const typeSections = ["Tous", "Actif", "Banni"];
  return (
    <main className=" px-10 py-2 flex gap-2 flex-col">
      <PageDescription text="Statistiques générales" />
      {/* <StatisticCardSection /> */}
      <section className="flex items-center gap-3 flex-wrap justify-between">
        <StaticsCard
          title="Nombre d’utilisateurs"
          value="100"
          Icon={<Icons.seller className="text-main w-9 h-10 fill-main" />}
        />
        <StaticsCard
          title="Nombre d’utilisateurs"
          value="100"
          Icon={<Icons.seller className="text-main w-9 h-10 fill-main" />}
        />
        <StaticsCard
          title="Nombre d’utilisateurs"
          value="100"
          Icon={<Icons.seller className="text-main w-9 h-10 fill-main" />}
        />
      </section>
      <SeparatorSection title="vendeurs">
        <Button className="rounded-none gap-2 capitalize font-medium px-6">
          Export Csv
          <Icons.TbFileExport />
        </Button>
      </SeparatorSection>
      <ContentSection typeSections={typeSections} tableType="user" />
    </main>
  );
}
