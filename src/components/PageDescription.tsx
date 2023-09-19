import * as React from "react";

interface IPageDescriptionProps {
  text: string;
}

const PageDescription: React.FunctionComponent<IPageDescriptionProps> = ({
  text,
}) => {
  return (
    <>
      <h1 className="text-[#7D7D7D] text-sm font-bold py-5">{text}</h1>
    </>
  );
};

export default PageDescription;
