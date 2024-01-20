import React from 'react'
import { motion } from "framer-motion"
import clouds from './ImagesPort/clouds.png'
import clouds2 from './ImagesPort/clouds2.png'
import birds from './ImagesPort/birds.png'

function Landing2() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <motion.div  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}  
  className=' w-[80vw] flex items-center justify-center h-[80vh]'>
        
        <div className='flex justify-evenly'>
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.4 },
  }}
  whileTap={{ scale: 0.9 }}
 src={clouds2} className='h-[18vw]' alt="" />
           <div className='ml-10'>
           <p className='font-[Heading] text-[5vw] text-center'>HEY I AM YUVRAJ</p><br />
            <p className='w-[30vw] text-center font-thin text-[2.4vw]'>A student by day, UI magician by night. 
                Turning funky designs into digital reality is my vibe.
                 Fluent in web and app development chatter. Let's code the cool stuff !!!</p>
           </div>
           <motion.img whileHover={{
    scale: 1.05,
    transition: { duration: 0.4 },
  }}
  initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
  whileTap={{ scale: 0.9 }}
   src={clouds} className='mt-[20vw] ml-5 h-[18vw]' alt="" />
   
        </div>


    </motion.div>
    </div>
  );
}


export default Landing2