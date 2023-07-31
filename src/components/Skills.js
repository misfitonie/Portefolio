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

            <Skill name="Unity" x="7vw" y="-5vw"/>
            <Skill name="Unreal" x="-7vw" y="5vw"/>
            <Skill name="C#" x="10vw" y="0vw"/>
            <Skill name="C++" x="-10vw" y="0vw"/>
            <Skill name="NodeJS" x="5vw" y="13vw"/>
            <Skill name="Git" x="-20vw" y="3vw"/> 
            <Skill name="Java" x="-14vw" y="-14vw"/> 
            <Skill name=".Net" x="-4vw" y="-9vw"/> 
            <Skill name="VueJS" x="15vw" y="-17vw"/>
            <Skill name="Typescript" x="19vw" y="-5vw"/>
            <Skill name="Javascript" x="0vw" y="-19vw"/>
            <Skill name=".Net Core" x="6vw" y="-13vw"/> 
            <Skill name="NextJS" x="-9vw" y="15vw"/>
            <Skill name="Docker" x="-27vw" y="-9vw"/>
            <Skill name="Python" x="24vw" y="12vw"/>
            <Skill name="Terraform" x="30vw" y="0vw"/>
            <Skill name="Azure" x="12vw" y="6vw"/>

        </div>
    </>
  )
}

export default Skills