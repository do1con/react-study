import React from "react";
import style from "./button2.module.scss";

function Button({ size }) {
  if (size === "big") return <button className={`${style.button} ${style.big}`}>큰 버튼</button>;
  else return <button className={`${style.button} ${style.small}`}>작은 버튼</button>;
}

export default Button;
console.log(style);
