import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'

function Service() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
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
    <motion.div 
    initial={{ y: 100, opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }} 
    transition={{ duration: 0.5, delay:0.4}}
    viewport={{ once: false }}
  >
    <div className=' w-full lg:w-3/4 m-auto px-4 py-10'>
    <div className="flex items-center py-5 justify-center">
        <span class="relative text-5xl font-bold text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Our Service</span>
      </div>
      <div className='mt-10'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.service} className='bg-white h-[450px] text-black rounded-xl m-2'>
              <div className='h-56 rounded-t-xl bg-slate-500 flex justify-center items-center'>
                <img src={d.img} alt={d.service} className='h-44 w-44 rounded-full' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.service}</p>
                <p className='text-center'>{d.review}</p>
                <button className='bg-slate-500 text-lg text-white px-6 py-1 rounded-xl'>read more</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </motion.div>
  );
}

const data = [
  {
    service: "AutoCadd",
    img: "/serviceImage/AutoCadd.jpg",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  },
  {
    service: "Construction",
    img: "/serviceImage/Construction.jpg",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  },
  {
    service: "Elivation",
    img: "/serviceImage/Elivation.jpg",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  },
  {
    service: "Interior",
    img: "/serviceImage/interior.jpg",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  },
  {
    service: "Estimation",
    img: "/serviceImage/Estimation.png",
    review: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corrupti obcaecati voluptas. Repellendus, itaque saepe."
  }
];

export default Service;
