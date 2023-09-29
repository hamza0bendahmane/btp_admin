import * as React from "react";
import DescriptionSectionUnit from "./sections/DescriptionSectionUnit";

export interface IProductDetailsProps {}

export function ProductDetails(props: IProductDetailsProps) {
  return (
    <div className="w-[60%] py-5 ">
      <div className="bg-white flex flex-col">
        <h1 className="text-center text-[13px] font-bold text-black py-4 border-b-[1px] border-[#f4f4f4] border-solid">
          PC Asus Gaming , I5-7852HQ ,512GB SSD NVME, 16GB RAM DDR5, NVIDIA RTX
          4050
        </h1>
        <DescriptionSectionUnit
          title="status"
          content="Attente d’approbation"
          bottom
        />
        <DescriptionSectionUnit
          title="categorie"
          content="Electronique"
          bottom
        />
        <DescriptionSectionUnit title="type" content="pc" bottom />
        <DescriptionSectionUnit title="type" content="pc" bottom />
        <DescriptionSectionUnit title="Etat" content="Neuf" bottom />
        <div className="flex flex-col w-full px-4 py-6 text-black gap-2 border-b-[1px] border-[#f4f4f4] border-solid">
          <span className="text-[13px] font-bold capitalize">description</span>
          <p className="text-[13px] font-medium">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hen drerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices m auris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            o rnare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, atmaxim us ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales.
          </p>
        </div>
        <DescriptionSectionUnit title="Prix" content="100$" bottom />
        <DescriptionSectionUnit
          title="PQuantité totalerix"
          content="100"
          bottom
        />
        <DescriptionSectionUnit title="Variants" content="3" bottom />
        <div className="flex flex-col w-full px-4 py-6 text-black gap-2 border-b-[1px] border-[#f4f4f4] border-solid">
          <span className="text-[13px] font-bold capitalize">Processeur</span>
          <div className="flex items-center gap-2">
            <div className="px-4 py-2  border border-solid border-main capitalize w-fit rounded-[6px]">
              i5
            </div>
            <div className="px-4 py-2  border border-solid border-main capitalize w-fit rounded-[6px]">
              i5
            </div>
            <div className="px-4 py-2  border border-solid border-main capitalize w-fit rounded-[6px]">
              i5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
