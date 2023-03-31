import React from "react";
import If from "./if";

export default function iconButton(props) {
  if (props.hide) return null;

  return (
    <If test={!props.hide}>
      <button className={"btn btn-" + props.style} onClick={props.onClick}>
        <i className={"fa fa-" + props.icon}></i>
      </button>
    </If>
  );
}
