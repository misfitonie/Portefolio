import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, compagny, compagnyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={compagnyLink} target="_blank" className='text-colors-primary capitalize dark:text-colors-primaryDark'>@{compagny}</a></h3>
            <span className='capitalize font-medium text-colors-dark/75 dark:text-colors-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='mt-2 font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
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
            Expérience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-colors-dark origin-top dark:bg-colors-light md:w-[4px] md:left-[30px] xs:left-[20px]'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                    position=" Programmeur Gameplay" 
                    compagny="Square Squid"
                    compagnyLink="https://www.square-squid.com/"
                    time="Déc 2022 - Janv 2023"
                    address="Valenciennes, Fr"
                    work="Création de deux prototype de jeu avec Unity.
                    Un prototype de jeu tile-matching (match3) et un prototype de jeu rogue-like / deck-builder.
                    Création de maquettes ainsi que développement de leurs features de gameplay." 
                    />
                    <Details 
                    position="Developpeur Logiciel & API" 
                    compagny="Avanade"
                    compagnyLink="https://www.avanade.com/fr-fr"
                    time="Juin 2021 - Oct 2022"
                    address="Bordeaux, Fr"
                    work="Consulting chez Hager et Legrand, monté en compétence en .NET Core 5.0 & ASP .NET Core, Azure | Azure IOT | Azure DevOps, Git et Terraform. Travail en méthode Agile au sein de la team IOT Cloud Factory." 
                    />           
                    <Details 
                    position="Developpeur Full Stack" 
                    compagny="Trizzy"
                    compagnyLink="https://trizzy.io/"
                    time="nov 2020 - Avr 2021"
                    address="Bordeaux, Fr"
                    work="Réalisation et maintenance de chats-bot relationnels orientés zéro déchet. Monter en compétence sur : AngularJS, .Net, MongoDB, MariaDB, Entity Framework." 
                    />
                </ul>
        </div>
    </div>
  )
}

export default Experience