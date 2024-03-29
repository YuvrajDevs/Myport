import React from 'react'
import yss from './assets/ImagesPort/Yuvraj Singh Shekhawat.png'
import Behance from './assets/ImagesPort/Behance.png'
import LinkedIn from './assets/ImagesPort/LinkedIn.png'
import Mail from './assets/ImagesPort/Mail.png'
import Github from './assets/ImagesPort/Github.png'
import { motion } from "framer-motion"


function Footer() {
  return (
     <div className='min-h-96 mt-[10vh] footer flex items-center justify-center'>
    <motion.div  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} 
  className=' w-[80vw] flex flex-col items-center justify-center h-[100vh]'>
        
        
            <p className='foot1 font-[Heading] text-[5vw] text-center'>Interested in working together</p>
            <p className='foot2 w-[80vw] text-center font-extralight text-[1.7vw]'>Ready to turn your vision into a reality? Let's connect and kickstart the journey of transforming your ideas into tangible, innovative solutions! Reach out to get started !!!</p>
            <img src={yss} className='yss w-[50vw] mt-10 mb-10' alt="" />
            <div className='flex gap-14'>
                <a target="_blank" href="https://www.behance.net/yuvrajsingh0712">
            <motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={Behance} className='link h-[6vw]' alt="" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/yuvraj-singh-shekhawat-4404b4283/">
            <motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={LinkedIn} className='link h-[6vw]' alt="" />
                </a>
            <a target="_blank" href="mailto:workwithyuvraj07@gmail.com">
            <motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={Mail} className='link h-[6vw]' alt="" />
            </a>
            <a target="_blank" href="https://github.com/YuvrajDevs">
            <motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={Github} className='link h-[6vw]' alt="" />
            </a>
            </div>
    </motion.div>
    </div>
    )
}

export default Footer