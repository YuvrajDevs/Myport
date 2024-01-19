import React from 'react'
import { motion } from "framer-motion"
function Landing3() {
  return (
    <div  className='w-full h-screen flex items-center justify-center'>
    <motion.div 
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}   className=' w-[80vw] flex flex-col items-center  h-[90vh] rounded-3xl bg-[#1D1D1D]'>
        
   <div className='bg-transparent flex'>
   <div className='bg-transparent w-[40vw] h-[50vh] items-center flex pt-12 flex-col '>

<motion.h3 whileHover={{ scale: [null, 1.1, 1.1] }} className='text-[2.5vw] font-[Heading] bg-transparent'>Designer</motion.h3>
<p className='bg-transparent text-[1.2vw] h-[4vw] text-center font-light w-[30vw] mt-3'>I Love creating fancy, funky, and minimalistic designs that deliver a 
    beautiful user experience.</p>
<p className='bg-transparent  text-[1.3vw] text-center font-semibold w-[30vw] mt-10'>I Enjoy Designing</p>
<p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>User Interface (UI)</p>
<p className='bg-transparent font-extralight text-[1.3vw] mt-1 mb-1'>User Experience (UX)</p>
<p className='bg-transparent font-extralight text-[1.3vw] mt-1 mb-1'>Websites</p>
<p className='bg-transparent font-extralight text-[1.3vw] mt-1 mb-1'>Apps</p>
</div>

<div className='bg-[#FFE0CB] h-[55vh] mt-14 w-[2.5px] rounded-sm'> </div>

<div className='bg-transparent w-[40vw] h-[50vh] items-center flex pt-12 flex-col '>

<motion.h3  whileHover={{ scale: [null, 1.1, 1.1] }} className='text-[2.5vw] font-[Heading] bg-transparent'>Developer</motion.h3>
<p className='bg-transparent text-[1.2vw] text-center font-light h-[4vw] w-[30vw] mt-3'>I love coding beautiful interfaces and bring those ideas to life.</p>

<div className='bg-transparent mt-10 flex  '>
    <div className='bg-transparent flex flex-col items-center  '><p className='bg-transparent  text-[1.3vw]  text-center font-semibold w-[20vw] '>Languages</p>
    <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>Java &nbsp; &nbsp; &nbsp; Javascript</p>
    <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>C &nbsp; &nbsp; &nbsp; C++</p>
    <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>Python &nbsp; &nbsp; &nbsp; Dart</p>
    </div>
    
    <div className='bg-transparent flex flex-col items-center  '><p className='bg-transparent  text-[1.3vw]  text-center font-semibold w-[20vw] '>Languages</p>
    <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>Html &nbsp; &nbsp; &nbsp; Css</p>
    <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>ReactJS &nbsp; &nbsp; &nbsp; Bootstrap</p>
    <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>TailwindCss &nbsp; &nbsp; &nbsp; Flutter</p>
    <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>VueJS &nbsp; &nbsp; &nbsp; Angular</p>
    </div>
</div>

</div>
</div>

    <div className='bg-transparent mt-10 items-center'>
        <motion.h3 whileHover={{ scale: [null, 1.1, 1.1] }} className='text-[2.5vw] font-[Heading] bg-transparent text-center'>Other Skills</motion.h3>
        <div className='flex bg-transparent gap-10'>
        <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>Wireframing</p>
        <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>Prototyping</p>
        <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>Typography</p>
        <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>Spline3D</p>
        <p className='bg-transparent font-extralight text-[1.3vw] mt-2 mb-1'>Blender3D</p>

        </div>
    </div>


</motion.div>

</div>
  )
}

export default Landing3