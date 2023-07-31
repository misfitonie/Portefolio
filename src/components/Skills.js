import React from 'react'
import { motion } from 'framer-motion'
import profilePic from "../../public/images/profile/v0.png"
import Image from 'next/image'

const Skill = ({name, x, y}) => {
    return(
      <motion.div className='flex items-center justify-center rounded-full font-semibold py-3 px-6 cursor-pointer absolute
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-colors-dark xs:dark:text-colors-light xs:font-bold
      shadow-colors-dark
      bg-colors-dark
      text-colors-light
      dark:text-colors-dark
      dark:bg-colors-light'
      whileHover={{scale:1.05}}
      initial={{x:0,y:0}}
      animate={{x:x, y:y, transition:{duration: 1.5}}}

      viewport={{once: true}}
      >
        {name}
      </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className=' font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>
            <motion.div className='flex items-center justify-center rounded-full font-semibold cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2
            shadow-colors-dark
            text-colors-light
            dark:text-colors-dark
            dark:bg-colors-light'
            whileHover={{scale:1.05}}
            >
              <a href='/CV_FerreiraTheo.pdf' download={true}>
                <Image 
                src={profilePic}
                alt='profilepic'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className='h-28 w-28'/>
              </a>
            </motion.div>

            <Skill name="C#" x="7vw" y="-3w"/> 
            <Skill name="C++" x="-20vw" y="2vw"/>
            <Skill name="Unity" x="20vw" y="6vw"/>
            <Skill name="Unreal Engine" x="0vw" y="12vw"/> 
            <Skill name="Git" x="-20vw" y="15vw"/> 
            <Skill name="Java" x="15vw" y="-12vw"/> 
            <Skill name=".Net" x="32vw" y="-5vw"/> 
            {/* <Skill name="VueJS" x="0vw" y="-20vw"/>
            <Skill name="Typescript" x="0vw" y="-18vw"/>
            <Skill name="Javascript" x="0vw" y="-20vw"/>
            <Skill name=".Net Core" x="-25vw" y="-15vw"/> 
            <Skill name="NextJS" x="18vw" y="18vw"/>
            <Skill name="NodeJS" x="18vw" y="16vw"/>
            <Skill name="Docker" x="18vw" y="14vw"/>
            <Skill name="Python" x="18vw" y="12vw"/>
            <Skill name="Terraform" x="18vw" y="10vw"/>
            <Skill name="Azure" x="18vw" y="8vw"/> */}

        </div>
    </>
  )
}

export default Skills