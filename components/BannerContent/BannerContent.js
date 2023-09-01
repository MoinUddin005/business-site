import React from "react";
import light2 from "../../public/assets/images/banner/home1/3.png";
import png1 from "../../public/assets/images/banner/home1/1.png";
import Image from "next/image";
import Link from "next/link";

const BannerContent = () => {
  return (
    <div className="container">
      <div className="banner__content-coin">
        <Image className="" src={light2} alt="coin icon" />
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="md:col-span-7">
          <div className="lg:ml-4">
            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
              Invest your money <br /> with higher return
            </h4>
            <p>
              Anyone can invest money in different currencies to increase their
              earnings with the help of Bitrader online.
            </p>
            <Link
              href="/"
              className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3"
            >
              Get Started <i className="mdi mdi-chevron-right align-middle"></i>
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative">
            <div
              class="banner__thumb"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image src={png1} alt="banner-thumb" className="dark" />
            </div>
            <div className="absolute bottom-24 right-0">
              <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                <Link
                  href=""
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600"
                >
                  <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
