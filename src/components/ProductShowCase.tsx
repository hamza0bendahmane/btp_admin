"use client";

import Image from "next/image";
import { useState } from "react";

interface IProductShowCaseProps {}

const ProductShowCase: React.FunctionComponent<IProductShowCaseProps> = (
  props
) => {
  const [selectedImage, setSelectedImage] = useState<number>(1);

  return (
    <div className="w-[40%] py-5 px-4 flex items-center justify-center flex-col gap-4">
      <div className="w-[350px] h-[350px] flex items-center justify-center rounded-[15px]">
        <Image
          src={`/images/pic${selectedImage}.png`}
          width={350}
          height={350}
          alt="product"
        />
      </div>
      <div className="flex items-center justify-between w-[350px]">
        <div
          className="w-[100px] h-[100px] flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(1)}
        >
          <Image
            src={`/images/pic1.png`}
            width={100}
            height={100}
            alt="product"
          />
        </div>
        <div
          className="w-[100px] h-[100px] flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(2)}
        >
          <Image
            src={`/images/pic2.png`}
            width={100}
            height={100}
            alt="product"
          />
        </div>
        <div
          className="w-[100px] h-[100px] flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(3)}
        >
          <Image
            src={`/images/pic3.png`}
            width={100}
            height={100}
            alt="product"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowCase;
