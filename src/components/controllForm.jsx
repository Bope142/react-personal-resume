import React from "react";
import "../assets/style/components/controll.form.scss";
export function InputForm(props) {
  return (
    <div className="input__box_container">
      <label htmlFor={props.name}>{props.label}</label>
      <div className="content">
        <div className="input__icons">
          <props.icons></props.icons>
        </div>
        <input
          className="input__form"
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
        />
      </div>
    </div>
  );
}
export function Memo(props) {
  return (
    <div className="input__box_container">
      <label htmlFor={props.name}>{props.label}</label>
      <div className="content">
        <textarea
          className="input__form memo_form"
          placeholder={props.placeholder}
          name={props.name}
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}
