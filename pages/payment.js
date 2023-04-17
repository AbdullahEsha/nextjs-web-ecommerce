import React, { useState } from "react";
import ShippingAddress from "../components/ShippingAddress";
import PaymentForm from "../components/PaymentForm";

const payment = () => {
  const [shipping, setShipping] = useState(null);
  const [refCode, setRefCode] = useState("");
  return (
    <div>
      <ShippingAddress
        setShipping={setShipping}
        refCode={refCode}
        setRefCode={setRefCode}
        cssClasses={shipping ? "hidden" : "block"}
      />

      {/* <PaymentForm
        shipping={shipping}
        setShipping={setShipping}
        cssClasses={shipping ? "hidden" : "block"}
        refCode={refCode}
        setRefCode={setRefCode}
      /> */}
    </div>
  );
};

export default payment;
