import React from 'react'
import Process from "./Process"
import AboutSection from './AboutSection'
import { motion } from 'framer-motion'

function About(){
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5,}}
      viewport={{ once: false }}
    >
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, }}
        viewport={{ once: false }}
      >

        <AboutSection/>
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, }}
        viewport={{ once: false }}
      >
        <Process/>
      </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About