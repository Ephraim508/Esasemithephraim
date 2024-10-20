import React from "react";
import "./ThankYou.css";
import { useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const product = location.state?.product; // Get the product details from the location state

  return (
    <div>
      <h1>Thank You</h1>
      <div className="thankyoupage">
        <p>
          Thank you for your interest in <br />
          <span>{product?.plantName}!</span>
        </p>
        {product && (
          <div>
            <img
              src={product.img}
              alt={product.plantName}
              className="thankyou-plant"
            />
            <p className="thankyou-name">{product.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThankYou;
