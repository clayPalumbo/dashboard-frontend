import React from "react";
import "./styles/card.scss";

export const Card = (props: any) => {
  const { size } = props;
  return <div className={`card card-${size}`}>{props.children}</div>;
};
