import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Service() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='w-full lg:w-3/4 m-auto px-4'>
      <div>
      <div className="flex items-center justify-center">
        <span class="relative text-3xl font-bold text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">How Our Process</span>
      </div>
        <span className="text-slate-800 flex flex-col text-center text-5xl font-bold "> see how it works</span>
      </div>
      <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.service} className='bg-white h-[450px] text-black rounded-xl m-2'>
              <div className='h-56 rounded-t-xl bg-White flex justify-center items-center'>
                <img src={d.img}  alt={d.service} className='w-48' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-bold'>{d.service}</p>
                <p className='text-center'>{d.review}</p>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    service: "Book a Meeting",
    img: "/AboutImage/Start.png",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  },
  {
    service: "Meet Our Consultant",
    img: "/AboutImage/MeetUs.png",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  },
  {
    service: "Finalize Your Design",
    img: "/AboutImage/Design.png",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  },
  {
    service: "Track Your Home",
    img: "/AboutImage/Track.png",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  },
  {
    service: "Settle In",
    img: "/AboutImage/Settle.png",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  }
];

export default Service;
