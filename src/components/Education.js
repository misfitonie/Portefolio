import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className=' font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-colors-dark/75 dark:text-colors-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='pt-2 font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    );
};

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64 '>        
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Diplôme
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-colors-dark origin-top dark:bg-colors-light md:w-[4px] md:left-[30px] xs:left-[20px]'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                    type="Certification : Microsoft Azure Fundamentals" 
                    time="2022"
                    place="Bordeaux"
                    info="Certification des connaissance de base des Cloud Services et de la manière dont ces services sont fournis avec Microsoft Azure." 
                    />
                    <Details 
                    type="BAC +5 : Expert en Développement Logiciel, Mobile & IoT" 
                    time="2020-2022"
                    place="Ynov Informatique Bordeaux"
                    info="Maîtriser le développement logiciel sur tous les terminaux mobiles et pour les objets connectés. Découverte des langages spécifiques et 
                    les contraintes particulières liées aux smartphones, objets connectés ou différents logiciels." 
                    />
                    <Details 
                    type="BAC +3 : Bachelor en Développement Informatique" 
                    time="2017-2020"
                    place="Ynov Informatique Bordeaux"
                    info="Découverte des multiples facettes du monde informatique : Développement logiciel et web, infrastructures réseaux, initiation à la cybersécurité. Maîtrise des environnements informatiques tels que Linux, MacOs et Windows." 
                    />
                </ul>
        </div>
    </div>
  )
}

export default Education