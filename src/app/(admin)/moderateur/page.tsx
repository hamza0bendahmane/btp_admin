import PageDescription from "@/components/PageDescription";
import StaticsCard from "@/components/cards/StasticsCard";
import AddModerateurForm from "@/components/forms/AddModerateurForm";
import ModalAddModerateur from "@/components/modal/ModalAddModerateur";
import ContentSection from "@/components/sections/ContentSection";
import SeparatorSection from "@/components/sections/SeparatorSection";
import StatisticCardSection from "@/components/sections/StatisticCardSection";
import { Button } from "@/components/ui/Botton";
import { Icons } from "@/components/ui/Icons";

export default function Client() {
  const typeSections = ["Tous", "Actif", "Banni"];
  return (
    <main className="px-10 py-2 flex gap-2 flex-col">
      <PageDescription text="Statistiques générales" />
      {/* <StatisticCardSection /> */}
      <section className="flex items-center gap-3 flex-wrap justify-between">
        <StaticsCard
          title="Nombre d’utilisateurs"
          value="100"
          Icon={<Icons.twoUsers className="text-main w-9 h-9 fill-main" />}
        />
        <StaticsCard
          title="Nombre d’utilisateurs"
          value="100"
          Icon={<Icons.twoUsers className="text-main w-9 h-9 fill-main" />}
        />
        <StaticsCard
          title="Nombre d’utilisateurs"
          value="100"
          Icon={<Icons.twoUsers className="text-main w-9 h-9 fill-main" />}
        />
      </section>
      <SeparatorSection title="Modérateurs">
        <div className="flex items-center gap-4">
          <Button className="rounded-none gap-2 capitalize font-medium px-6">
            Export Csv
            <Icons.TbFileExport />
          </Button>
          <ModalAddModerateur>
            <AddModerateurForm />
          </ModalAddModerateur>
        </div>
      </SeparatorSection>
      <ContentSection typeSections={typeSections} tableType="user" />
    </main>
  );
}
