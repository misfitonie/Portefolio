import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/v5.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Theo Ferreira</title>
        <meta name="Theo Ferreira | Ingénieur logiciel / Développeur jeu vidéo" content="SEO" />

      </Head>
      <TransitionEffect />
      <main className='flex items-center text-colors-dark w-full min-h-screen dark:text-colors-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='Theo' className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center pl-10 lg:w-full lg:text-center'>
              <AnimatedText text="Théo Ferreira" className='text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>

                J'ai toujours été passionné de programmation et de jeu vidéo. Vous pourrez découvrir ici mes derniers prototypes de jeux ainsi que plein d'informations sur moi, mon parcours et mes compétences !
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link 
                  href="/CV_FerreiraTheo.pdf" 
                  target={"_blank"} 
                  className='
                    flex items-center border-2 border-solid border-transparent p-2.5 px-6 rounded-lg text-lg font-semibold md:p-2 md:px-4 md:text-base
                    
                    bg-colors-dark text-colors-light
                    hover:bg-colors-light hover:text-colors-dark hover:border-colors-dark
                    
                    dark:bg-colors-light dark:text-colors-dark
                    hover:dark:bg-colors-dark hover:dark:text-colors-light hover:dark:border-colors-light
                  '
                  download={true}
                >Mon&nbsp;CV
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:ferreiretheo.pro@gmail.com"
                      className='ml-6 text-lg font-medium capitalize text-colors-dark underline dark:text-colors-light md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
