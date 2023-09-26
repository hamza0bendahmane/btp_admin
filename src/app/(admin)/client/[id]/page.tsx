import PageDescription from "@/components/PageDescription";
import DescriptionSectionUnit from "@/components/sections/DescriptionSectionUnit";
import { TableComponent } from "@/components/tables/TableComponent";

export default function page() {
  return (
    <main className="h-[100vh] px-10 py-2 flex gap-2 flex-col">
      <PageDescription
        className="text-black font-semibold"
        text="Utilisateurs > anouar"
      />
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
      <PageDescription text="Commandes" number={5} />
      <TableComponent />
    </main>
  );
}
