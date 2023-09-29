"use client";

import * as React from "react";
import SearchFilterTable from "../shared/SearchFilterTable";
import { TableComponent } from "../tables/TableComponent";

interface IContentSectionProps {
  typeSections: string[];
  tableType: "date" | "user";
}

// const typeSections = ["Tous", "Actif", "Banni"];

const ContentSection: React.FunctionComponent<IContentSectionProps> = ({
  typeSections,
  tableType,
}) => {
  return (
    <section>
      <SearchFilterTable typeSections={typeSections} />
      <TableComponent type={tableType} />
    </section>
  );
};

export default ContentSection;
