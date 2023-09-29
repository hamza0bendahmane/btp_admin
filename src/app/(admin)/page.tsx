import ChartBar from "@/components/ChartBar";
import PageDescription from "@/components/PageDescription";
import StatisticCardSection from "@/components/sections/StatisticCardSection";
import BasicTableButton from "@/components/tables/TableButton";
import BasicTable from "@/components/tables/TableDate";
import React from "react";

export default function page() {
  return (
    <main className="px-10 py-2 flex gap-2 flex-col">
      <PageDescription text="Commandes récentes" />
      <StatisticCardSection augmentation="20" />
      <PageDescription text="Revenues par mois" />
      <ChartBar />
      <PageDescription text="Ventes" />
      <PageDescription text="Statistiques du site" />
      <PageDescription text="Commandes récentes" />
      <div className="py-4">
        <BasicTableButton />
      </div>
      <PageDescription text="Les produits les plus populaires" />
      <PageDescription text="Les vendeurs les plus populaires" />
      <div className="py-4">
        <BasicTable />
      </div>
    </main>
  );
}
