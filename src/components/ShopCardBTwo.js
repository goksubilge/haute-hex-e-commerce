import React from "react";
import ShopCardBData from "../mocks/ShopCardBData";

function ShopCardBTwo() {
  return (
    <div>
      <div>
        <h4 className="text-papayas-textgray">Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p className="text-papayas-textgray">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>

      <div className="flex flex-wrap mobile:w-[20rem] mx-auto mobile:mx-0 mt-20 justify-center">
        {ShopCardBData().map((item, index) => (
          <div key={index} className="max-w-[400px]">
            <img
              src={item.picture}
              alt="shopCardPicture"
              className=" flex flex-row justify-center items-center"
            ></img>
            <h5 className="font-bold"> Graphic {item.title}</h5>
            <h6>{item.description}</h6>
            <h5>{item.price1}</h5>
            <h5>{item.price2}</h5>
            <div />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCardBTwo;
