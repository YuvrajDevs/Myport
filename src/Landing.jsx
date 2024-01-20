import React from 'react';
import Logo from './assets/ImagesPort/Yuvraj.png';
import { motion } from "framer-motion"
import bg from './assets/ImagesPort/bg.jpg'


function Landing() {
  return (
    
    <div className='backg w-screen h-[100vh] flex flex-col justify-between'>
      <div className='ml-5 flex justify-between'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]  }}>
          <div className="flex items-center mt-5 cursor-default">
            <img src={Logo} className='w-[15vh]' alt="" />
            <div className='ml-8 flex justify-center items-center gap-2'>
              <p className='font-extralight text-3vw '>UI/UX Designer</p>
              <div className='border-[#FFE0CB] border-2 h-2 w-2 rounded-full flex'></div>
              <p className='font-extralight ml-2 text-3vw'>Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div animate={{ y: [-260, 0] }} transition={{ type: 'spring', stiffness: 500, damping: 30 ,delay:0.4}} className='flex flex-col items-center mr-10'>
          <div className='h-8 w-[1px] bg-[#FFE0CB]'></div>
          <motion.p whileHover={{ scale: [null, 1.1, 1.1] }} className='text-lg font-extralight cursor-pointer'>Projects</motion.p>
          <div className='h-8 w-[1px] bg-[#FFE0CB]'></div>
          <motion.p whileHover={{ scale: [null, 1.1, 1.1] }} className='text-lg font-extralight cursor-pointer'>About</motion.p>
          <div className='h-8 w-[1px] bg-[#FFE0CB]'></div>
          <motion.p whileHover={{ scale: [null, 1.1, 1.1] }} className='text-lg font-extralight cursor-pointer'>Contact</motion.p>
          <div className='h-8 w-[1px] bg-[#FFE0CB]'></div>
          <div className='border-[#FFE0CB] border-2 h-4 w-4 rounded-full flex'></div>
        </motion.div>
      </div>

      <motion.div  
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]  }}
      className='flex justify-between mt-[35vh] cursor-default'>
        <div className='ml-5 '>
          <p className='font-[MajorHeading]  text-4vw sm:text-6vw lg:text-[6vw] leading-[6vw]'>
            Crafting pixels, <br /> <span className='font-[MajorHeading] mt-[8vh] text-4vw sm:text-6vw lg:text-8vw '>Shaping websites.</span>
          </p>
        </div>

        <p className=' sm:w-[40%] lg:w-[30%] mr-10 font-light text-3vw sm:text-4vw lg:text-[1.5vw] text-right'>
          I am a passionate developer and UI/UX designer based in India. I thrive on learning new concepts and
          translating them into visually appealing designs. Beyond coding, I enjoy gaming, relishing delicious food,
          working out, and acquiring new skills.
        </p>
      </motion.div>
    </div>
  );
}

export default Landing;
