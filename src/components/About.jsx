import React from 'react'
import {motion} from "framer-motion"
import {FadeIn} from "../shared/Variants"
import about from '../assets/about.png';
import about2 from '../assets/about2.png';

const About = ()=>{
    return (
        <div className='md:px-14 p-4 space-y-10' id="about">
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
              <motion.div
              variants={FadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} 
              
              className='md:w-1/2'>
                 <img src={about} alt="" />
              </motion.div>
              
              <motion.div
              variants={FadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} 
              
              className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years</span></h2>
                <p className='text-tartiary text-lg mb-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deserunt animi. Quisquam blanditiis officiis ab!</p>
                <button className='btnPrimary'>Get Started</button>
              </motion.div>
          </div>

          <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
              <motion.div
              variants={FadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              
              className='md:w-1/2'>
                 <img src={about2} alt="" />
              </motion.div>
              
              <motion.div
              variants={FadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              
              className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can Practise at any <span className='text-secondary'>time convinent for you</span></h2>
                <p className='text-tartiary text-lg mb-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deserunt animi. Quisquam blanditiis officiis ab!</p>
                <button className='btnPrimary'>Get Started</button>
              </motion.div>
          </div> 
        </div>
    )
}

export default About