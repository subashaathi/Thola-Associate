import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { motion } from "framer-motion";
import Footer from '../Footer/Footer';

function Career() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendForm('service_zimr37u', 'template_pzkj50g', form.current, {
        publicKey: 'boO80PJ2VrpdcJFLe',
      })
     .then(
        () => {
          alert('Successfully submitted');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.div
      className="box flex flex-col lg:flex-row"
      initial={{ y: 100, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, delay:0.4}}
      viewport={{ once: false 
      }}
    
    >
      <div className="lg:w-1/2 p-4 flex flex-col items-center lg:items-center">
      <div className="flex items-center py-5 justify-center">
        <span class="relative text-5xl font-bold text-sky-500 hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Career</span>
      </div>
        <div className='flex flex-col items-center py-3'>
          <img src="./Career.jpg" alt="Career" className="max-h-64 rounded-full" />
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start px-5 bg-sky-100 rounded-xl'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
      </div>
      <div className="lg:w-1/2 p-4">
        <form ref={form} onSubmit={sendEmail} className=' flex flex-col py-5 my-10 max-w-md mx-auto rounded-lg bg-slate-400'>
          <div className="mb-3">
            <label htmlFor="name" className="block mb-2 mx-5 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
            <input type="text" placeholder="Enter Your Name..." required name="from_name" className= "bg-gray-50 mx-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block mb-2 mx-5 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
            <input type="email" placeholder="Enter Your email..." required name="user_email" className="bg-gray-50 mx-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="block mb-2 mx-5 text-sm font-medium text-gray-900 dark:text-white">Phone:</label>
            <input type="text" name="user_phone" placeholder="Enter Your phone..." required className="bg-gray-50 border mx-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="block mb-2 mx-5 text-sm font-medium text-gray-900 dark:text-white">Subject:</label>
            <textarea name="subject" rows="2" className="block p-2.5 mx-10 w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Role..."></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="block mb-2 mx-5 text-sm font-medium text-gray-900 dark:text-white" >Your message</label>
            <textarea name="message" rows="4" className="block p-2.5 w-4/5 mx-10  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          </div>

          <div className='flex flex-col items-center'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
        </form>
      </div>

      
    </motion.div>


  );
}

export default Career;
