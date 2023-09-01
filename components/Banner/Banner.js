import Image from "next/image";
import React from "react";
import light1 from "../../public/assets/images/banner/home1/bg.png";
import png2 from "../../public/assets/images/banner/home1/4.png";

const Banner = () => {
  return (
    <div class="">
      <div class="banner__bg">
        <div class="banner__bg-element">
          <Image
            src={light1}
            alt="section-bg-element"
            class="dark hidden lg:block"
          />
          <span class="bg-color lg:hidden"></span>
        </div>
      </div>

      <div class="banner__shape">
        <span class="banner__shape-item banner__shape-item--1">
          <Image src={png2} alt="shape icon" />
        </span>
      </div>
    </div>
  );
};

export default Banner;
