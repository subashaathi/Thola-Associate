import React from 'react'
import ImgSlider from './ImgSlider'
import { motion } from 'framer-motion'


function About() {
  return (
    <motion.div 
    initial={{ y: 100, opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }} 
    transition={{ duration: 0.5, delay:0.4}}
    viewport={{ once: false }}
    className=''
  >
    
    
     <ImgSlider/>
    
    </motion.div>
  )
}

export default About
