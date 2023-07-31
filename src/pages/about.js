import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Skills from '@/components/Skills'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
 
    return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
        <Head>
            <title> Theo Ferreira | A Propos </title>
            <meta name='description' content='SEO'/>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-colors-light'>
            <Layout className='pt-16'>
                <AnimatedText text=" Qui suis-je ?" className='mb-16 text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8'/>            
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '> 
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-colors-dark/75 dark:text-colors-light/75'>Présentation</h2>
                        <p className='font-medium'>
                            Salut 👋!  Je m'appelle Théo, j'ai 24 ans et cela fais maintenant 2 ans que je travaille en tant que développeur logiciel. 
                            La programmation et celle des jeux en particuler a toujours été une grande passsion.
                        </p>
                        <p className='my-4 font-medium'>
                            Je me suis rapidement spécialisé dans le développement de logiciel mais aussi dans le domaine de l'IoT (Internet of Things) afin de pouvoir toucher à un maximum de technologies différentes.
                            Ma grande curiosité me pousse à constament apprendre, pratiquer et maîtriser.
                        </p>
                        <p className='font-medium'>
                            Les jeux vidéos ont toujours fait partie de ma vie et c'est très naturellement que j'ai commencé à développer seul mes premiers prototypes, puis à rencontrer des personnes partegeant la même passion.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid
                                  border-colors-dark bg-colors-light p-8 dark:bg-colors-dark dark:border-colors-light
                                  xl:col-span-4 md:order-1 md:col-span-8
                                  '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-colors-dark dark:bg-colors-light'/>
                        <Image src={profilePic} alt='TheoFerreira' className='w-full h-auto' 
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={24}/>
                                
                            </span>
                            <h2 className='text-xl font-medium text-colors-dark/75 dark:text-colors-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                ans</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={2}/>
                                
                            </span>
                            <h2 className='text-xl font-medium text-colors-dark/75 dark:text-colors-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                années d'expérience</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={5}/>
                                +
                            </span>
                            <h2 className='text-xl font-medium text-colors-dark/75 dark:text-colors-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                prototypes de jeu</h2>
                        </div>
                    </div> 
                </div>
            <Experience />
            <Skills />
            <Education />
            </Layout>
        </main>
    </>
  )
}

export default About