import React from "react";
import { TbChevronCompactRight } from "react-icons/tb";
import { TbChevronCompactLeft } from "react-icons/tb";
import { AiOutlineMinus } from "react-icons/ai";
import "../styles/Slider.css";

function Slider() {
  return (
    <div className="slider">
      <TbChevronCompactLeft />
      <TbChevronCompactRight />
      <div className="slide">
        <img src="assets/images/shopHeroProductSlide.png" alt="shop-hero-3" />

        {/* <div className=" top-1/4 left-1/4 right-1/4 text-papayas-textwhite "> */}
        <div className="flex flex-col items-center py-10">
          <h1>BLACK FRIDAY</h1>

          <h4 className="my-6 columns-1 flex">
            We know how large objects will act, but things on a
            <br />
            small scale just do not act that way.
          </h4>
          <button className="button-std ">Start Now</button>
        </div>

        {/* </div> */}
      </div>
      <div className="flex justify-center text-4xl text-papayas-textwhite">
        <AiOutlineMinus />
        <AiOutlineMinus />
      </div>
    </div>
  );
}

export default Slider;
