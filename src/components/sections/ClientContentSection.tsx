"use client";

import * as React from "react";
import SearchFilterTable from "../shared/SearchFilterTable";
import { TableComponent } from "../tables/TableComponent";

interface IClientContentSectionProps {}

const typeSections = ["Tous", "Actif", "Banni"];

const ClientContentSection: React.FunctionComponent<
  IClientContentSectionProps
> = (props) => {
  return (
    <section>
      <SearchFilterTable typeSections={typeSections} />
      <TableComponent />
    </section>
  );
};

export default ClientContentSection;
