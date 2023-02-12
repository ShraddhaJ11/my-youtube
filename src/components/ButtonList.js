import React from "react";
import Button from "./Button";

const buttons = [
  "All",
  "Stocks Markets",
  "Mixes",
  "Live",
  "Comedy",
  "Economics",
  "News",
  "Sports",
  "Bollywood",
  "League",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttons.map((btn,index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
