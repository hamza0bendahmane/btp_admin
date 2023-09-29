import ChartBar from "@/components/ChartBar";
import PageDescription from "@/components/PageDescription";
import DeleteModerateurModal from "@/components/modal/deleteModerateurModal";
import DescriptionSectionUnit from "@/components/sections/DescriptionSectionUnit";
import { TableComponent } from "@/components/tables/TableComponent";
import { Button } from "@/components/ui/Botton";

export default function page() {
  return (
    <main className="px-10 py-2 pb-5 flex gap-2 flex-col">
      <PageDescription
        className="text-black font-semibold"
        text="Utilisateurs > anouar"
      />
      <div className="flex flex-col gap-10">
        <div className="flex  bg-white flex-col rounded-sm">
          <DescriptionSectionUnit
            title="E-mail"
            content="mahdign@gmail.com"
            bottom
            buttonType="active"
          />
          <DescriptionSectionUnit
            title="E-mail"
            content="mahdign@gmail.com"
            bottom
            edit
          />
          <DescriptionSectionUnit
            title="E-mail"
            content="mahdign@gmail.com"
            bottom
          />
          <DescriptionSectionUnit title="E-mail" content="mahdign@gmail.com" />
        </div>
      </div>
      <PageDescription text="Action" />

      <DeleteModerateurModal />
    </main>
  );
}
