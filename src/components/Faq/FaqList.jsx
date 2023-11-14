import React from "react";
import FaqItem from "./FaqItem";
import { faqs } from "../../assets/data/faqs";

const FaqList = () => {
  return (
    <div>
      {" "}
      <ul className="mt-[38px]">
        {faqs.map((item, i) => {
          return <FaqItem key={i} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default FaqList;
