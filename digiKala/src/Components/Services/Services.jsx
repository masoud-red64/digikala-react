import React from "react";

import "./Services.css";
import ServiceBox from "./ServiceBox/ServiceBox";

export default function Services() {
  return (
    <section className="services">
      <div className="row justify-content-between">
        <ServiceBox title={"دیجی کالا جت"} img={"./images/services/service1.png"} />
        <ServiceBox title={"حراج استایل"} img={"./images/services/service2.png"} />
        <ServiceBox title={"خرید اقساطی"} img={"./images/services/service3.png"} />
        <ServiceBox title={"خرید عمده و سازمانی"} img={"./images/services/service4.png"} />
        <ServiceBox title={"ماه رمضان"} img={"./images/services/service5.png"} />
        <ServiceBox title={"گیم نت"} img={"./images/services/service6.png"} />
        <ServiceBox title={"کارت هدیه"} img={"./images/services/service7.png"} />
        <div className="col-3 col-xl-1">
          <div className="services__content">
            <a href="#" className="services__content-link">
              <div className="services__content-extra">
                <div className="services__content-extra-dot"></div>
              </div>
              <p className="services__content-text">بیشتر</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
