import React from "react";

import "./Stores.css";
import Store from "./Store/Store";

export default function Stores() {
  return (
    <section className="seller mt-4">
      <div className="row">
        <Store />
        <Store />
        <Store />
      </div>
    </section>
  );
}
