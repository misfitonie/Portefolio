import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute z-20 sm:right-0 sm:mt-1 sm:mr-1
    '>
        <div className='w-36 h-auto flex items-center justify-center relative md:w-24'>
            <CircularText className={"animate-reverse-spin"} />
            <Link 
                href="mailto:ferreiratheo.pro@gmail.com" 
                className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border border-solid 
                w-24 h-24 rounded-full font-semibold md:w-12 md:h-12 md:text-[10px]

                bg-colors-dark text-colors-light border-colors-dark  hover:text-colors-dark hover:bg-colors-light

                dark:bg-colors-dark dark:text-colors-light dark:border-colors-light
                hover:dark:bg-colors-light hover:dark:text-colors-dark hover:dark:border-colors-dark
                '>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe 