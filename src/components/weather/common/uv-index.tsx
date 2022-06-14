import { BsSun } from "react-icons/bs";
import "../styles/uv-index.scss";
import { getUvColor } from "./utils";
import React from "react";

export const UvIndex = (props: any) => {
  const { uv } = props;
  const color = getUvColor(uv);

  return (
    <div className={`uv-box uv-box-${color}`}>
      <BsSun />
      <span className="location-name">UV Index: {uv}</span>
    </div>
  );
};
