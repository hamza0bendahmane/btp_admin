import * as React from "react";
import StaticsCard from "../cards/StasticsCard";
import { Icons } from "../ui/Icons";

interface IStatisticCardSectionProps {}

const StatisticCardSection: React.FunctionComponent<
  IStatisticCardSectionProps
> = (props) => {
  return (
    <section className="flex items-center gap-3 flex-wrap justify-between">
      <StaticsCard
        title="Nombre d’utilisateurs"
        value="100"
        Icon={<Icons.FaUser className="text-main w-9 h-9" />}
      />
      <StaticsCard
        title="Nombre d’utilisateurs"
        value="100"
        Icon={<Icons.FaUser className="text-main w-9 h-9" />}
      />
      <StaticsCard
        title="Nombre d’utilisateurs"
        value="100"
        Icon={<Icons.FaUser className="text-main w-9 h-9" />}
      />
    </section>
  );
};

export default StatisticCardSection;
