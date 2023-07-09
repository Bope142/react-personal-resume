import React from "react";
import "../assets/style/components/button.scss";

export function ButtonIcons(props) {
  return (
    <button className={"btn btn-icons  " + props.classColorBtn}>
      <p className="lable__btn">{props.label}</p>
      <props.icons></props.icons>
    </button>
  );
}
