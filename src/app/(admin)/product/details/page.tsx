import PageDescription from "@/components/PageDescription";
import { ProductDetails } from "@/components/ProductDetails";
import ProductShowCase from "@/components/ProductShowCase";
import React from "react";

export default function page() {
  return (
    <main className="px-10 py-2 flex gap-2 flex-col">
      <PageDescription
        className="text-black font-semibold"
        text="produit > electronique > Pc et portable > PC Asus Gaming , I5-7852HQ ,512GB SSD NVME, 16GB RAM DDR5, NVIDIA RTX 4050 "
      />
      <div className="flex items-start">
        <ProductShowCase />
        <ProductDetails />
      </div>
    </main>
  );
}
