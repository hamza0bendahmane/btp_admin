import * as React from "react";
import StaticsCard from "../cards/StasticsCard";
import { Icons } from "../ui/Icons";

interface IStatisticCardSectionProps {
  augmentation?: string;
}

const StatisticCardSection: React.FunctionComponent<
  IStatisticCardSectionProps
> = ({ augmentation }) => {
  return (
    <section className="flex items-center gap-3 flex-wrap justify-between">
      <StaticsCard
        title="Nombre d’utilisateurs"
        value="100"
        augmentation={augmentation}
        Icon={<Icons.FaUser className="text-main w-9 h-9" />}
      />
      <StaticsCard
        title="Nombre d’utilisateurs"
        value="100"
        Icon={<Icons.FaUser className="text-main w-9 h-9" />}
        augmentation={augmentation}
      />
      <StaticsCard
        title="Nombre d’utilisateurs"
        value="100"
        Icon={<Icons.FaUser className="text-main w-9 h-9" />}
        augmentation={augmentation}
      />
    </section>
  );
};

export default StatisticCardSection;
