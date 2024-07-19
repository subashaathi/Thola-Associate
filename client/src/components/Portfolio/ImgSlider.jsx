import React from "react";
import Slider from "react-slick";
import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${baseUrl}/Sample${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="bg-black max-h-screen mx-auto py-12">
      <div className="flex flex-col items-center">
        <span className="flex flex-col text-center text-3xl text-white font-bold">
          Dreams that we turned into Reality
        </span>
        <button
          type="submit"
          className="bg-black text-white active:text-black m-3 py-3 px-8 border hover:border-White rounded"
        >
          Our Projects...
        </button>
      </div>
      <Slider {...settings}>
        <div className="flex flex-col items-center">
          <img
            src={baseUrl + "/Sample1.jpg"}
            className="max-h-screen max-w-xl object-fill rounded mx-auto"
          />
          <p className="text-lg text-gray-600 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            quisquam?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={baseUrl + "/Sample2.jpg"}
            className="max-h-screen max-w-xl object-fill rounded mx-auto"
          />
          <p className="text-lg text-gray-600 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            quisquam?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={baseUrl + "/Sample3.jpg"}
            className="max-h-screen max-w-xl object-fill rounded mx-auto"
          />
          <p className="text-lg text-gray-600 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            quisquam?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={baseUrl + "/Sample4.jpg"}
            className="max-h-screen max-w-xl object-fill rounded mx-auto"
          />
          <p className="text-lg text-gray-600 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            quisquam?
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default ImgSlider;