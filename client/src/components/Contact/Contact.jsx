import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3dk0rsz', 'template_ec7hbu6', form.current, {
        publicKey: 'boO80PJ2VrpdcJFLe',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, delay:0.4}}
      viewport={{ once: false }}
      className='h-screen'
    >
      
      <div className="relative md:h-1/2 lg:h-1/2 xl:h-1/2">
        <a href='https://goo.gl/maps/vCzSvp2ZKi9BWofg7'>
          <img src="./ContactImage/map.png" alt="" className="w-full h-1/2 md:h-full lg:h-1/2 xl:h-full object-cover" />
        </a>
        
        <div className="flex items-center py-5 justify-center">
          <span className="relative text-5xl font-bold text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            Contact
          </span>
        </div>

        <div className='card relative flex flex-col justify-center w-full lg:w-3/4 m-auto px-4 py-10'>
          <div className='card-body grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-white text-black flex flex-col justify-center items-center rounded-xl p-4'>
              <img src="./ContactImage/mail_icon.png" alt="" width="50px" />
              <h1>Mail Us</h1>
              <p>Subashaathee@gmail.com</p>
            </div>
            <div className='bg-white text-black flex flex-col justify-center items-center rounded-xl p-4'>
              <img src="./ContactImage/Call.png" alt="" width="50px" />
              <h1>Call Us</h1>
              <p>+91 7092802364</p>
            </div>
            <div className='bg-white text-black flex flex-col justify-center items-center rounded-xl p-4'>
              <img src="./ContactImage/location.png" alt="" width="50px" />
              <h1>Location</h1>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="max-w-fit mx-auto p-4 pt-6 pb-8 m-4 bg-white rounded-xl shadow-md dark:bg-white">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name:</label>
                <input type="text" name="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name.." required />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone:</label>
                <input type="text" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone.." required />
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="subject" className="block mb-2 mx-5 text-sm font-medium text-gray-900 dark:text-black">Subject:</label>
              <textarea name="subject" rows="2" className="block p-2.5 mx-10 w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Role..."></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="block mb-2 mx-5 text-sm font-medium text-gray-900 dark:text-black">Your message:</label>
              <textarea name="message" rows="4" className="block p-2.5 w-4/5 mx-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>

            <div className='flex flex-col items-center'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
          </form>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
}

export default Contact;
