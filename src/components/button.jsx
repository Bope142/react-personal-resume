import React from "react";
import "../assets/style/components/button.scss";

export function ButtonIcons(props) {
  if (props.link) {
    return (
      <button
        className={"btn btn-icons  " + props.classColorBtn}
        onClick={() => {
          window.location.assign(props.link);
        }}
      >
        <p className="lable__btn">{props.label}</p>
        <props.icons></props.icons>
      </button>
    );
  } else {
    return (
      <button className={"btn btn-icons  " + props.classColorBtn}>
        <p className="lable__btn">{props.label}</p>
        <props.icons></props.icons>
      </button>
    );
  }
}

export function SimpleButton(props) {
  return (
    <button className={"btn  " + props.classColorBtn}>{props.label}</button>
  );
}
