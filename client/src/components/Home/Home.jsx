import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Career from '../Career/Career';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative h-[calc(100vh-100px)]">
      <video 
        src="./HomeVideo.mp4" 
        className="opacity-90 w-full h-full object-cover" 
        muted 
        autoPlay 
        loop
      ></video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <motion.span 
          initial={{ y: -100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-white flex flex-col text-center text-5xl font-bold"
        >
          Crafting Homes
        </motion.span> 
        <br/>
        <motion.span 
          initial={{ y: -100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white flex flex-col text-center text-5xl font-bold"
        >
          that suit your lifestyle
        </motion.span>
        <br />
        <motion.span 
          initial={{ y: -100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white flex flex-col text-center text-2xl "
        >
          Start your dream home construction journey with us.
        </motion.span>
        <br />

        <Link to="/Contact">        
          <motion.button 
            initial={{ scale: 0.5, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
            type='submit' 
            className="bg-transparent active:bg-black text-white  hover:text-white py-3 px-8 border hover:border-transparent rounded"
          >
            Get a Callback..
          </motion.button>
        </Link>

      </div>
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <About/>
      </motion.div>
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Service/>
      </motion.div>
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5,}}
      >
        <Portfolio/>
      </motion.div>
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Career/>
      </motion.div>
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.8 }}
      className=''>
        <Contact/>
        
      </motion.div>

      

    </div>
  );
}

export default Home;