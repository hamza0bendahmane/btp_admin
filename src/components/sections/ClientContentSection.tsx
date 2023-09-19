import * as React from "react";
import SearchFilterTable from "../shared/SearchFilterTable";

interface IClientContentSectionProps {}

const typeSections = ["Tous", "Actif", "Banni"];

const ClientContentSection: React.FunctionComponent<
  IClientContentSectionProps
> = (props) => {
  return (
    <section>
      <SearchFilterTable typeSections={typeSections} />
    </section>
  );
};

export default ClientContentSection;
