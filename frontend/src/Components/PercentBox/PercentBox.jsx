import React from "react";

import "./PercentBox.css";
import { enToPersianNumber } from "../../func/utils";

export default function PercentBox({ percent }) {
  return (
    <p className="discount-percent">
      {percent ? enToPersianNumber(percent) : ""}
    </p>
  );
}
