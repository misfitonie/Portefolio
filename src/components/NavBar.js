import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion"
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
    
const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-colors-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] duration-300
            dark:bg-colors-light
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const CustomLinkMobile = ({href, title, className="", toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return(
        <button href={href} className={`${className} relative group text-colors-light dark:text-colors-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`
            h-[1px] inline-block bg-colors-light dark:bg-colors-dark 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </button>
    )
}
const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
         
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-colors-light dark:bg-colors-dark dark:text-colors-light relative z-10 lg:px-16 md:px-12 sm:px-8">
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-colors-dark dark:bg-colors-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-colors-dark dark:bg-colors-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-colors-dark dark:bg-colors-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className=" w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4'/>
                    <CustomLink href="/about" title="About" className='mx-4'/>
                    <CustomLink href="/projects" title="Projects" className='ml-4' />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://twitter.com" target="_blank"
                    whileHover={{y:-2 }}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="/" target="_blank"
                    whileHover={{y:-2 }}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="/" target="_blank"
                    whileHover={{y:-2 }}
                    whileTap={{scale:0.9}}
                    className="w-6 ml-3"
                    >
                        <TwitterIcon />
                    </motion.a>

                    <button 
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-9 flex items-center justify-center rounded-full p-1 
                        ${mode === "light" ? "bg-colors-dark text-colors-light" : "bg-colors-light text-colors-dark"}`}
                    >
                        {
                        mode === "dark" ?
                        <SunIcon className={"fill-colors-dark"} />
                        : <MoonIcon className={"fill-colors-dark"} />
                    }
                    </button>

                </nav>
            </div>
       
            {isOpen ? 

                <motion.div
                initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
                animate={{scale:1, opacity:1}}
                className=" min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-md py-32
                bg-colors-dark/90
                dark:bg-colors-light/75">
                    <nav className="flex items-center flex-col justify-center">
                        <CustomLinkMobile href="/" title="Home" toggle={handleClick} />
                        <CustomLinkMobile href="/about" title="About" toggle={handleClick} />
                        <CustomLinkMobile href="/projects" title="Projects" toggle={handleClick}  />
                    </nav>
    
                    <nav className="flex items-center justify-center flex-wrap mt-2">

                        <motion.a href="https://twitter.com" target="_blank"
                        whileHover={{y:-2 }}
                        whileTap={{scale:0.9}}
                        className="w-6 mr-3 sm:mx-1"
                        >
                            <LinkedInIcon />
                        </motion.a>

                        <motion.a href="/" target="_blank"
                        whileHover={{y:-2 }}
                        whileTap={{scale:0.9}}
                        className="w-6 mx-3 bg-colors-light dark:bg-colors-dark rounded-full sm:mx-1"
                        >
                            <GithubIcon />
                        </motion.a>

                        <motion.a href="/" target="_blank"
                        whileHover={{y:-2 }}
                        whileTap={{scale:0.9}}
                        className="w-6 ml-3 sm:mx-1"
                        >
                            <TwitterIcon />
                        </motion.a>
    
                        <button 
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            className={`ml-4 flex items-center justify-center rounded-full p-1 
                            ${mode === "light" ? "bg-colors-dark text-colors-light" : "bg-colors-light text-colors-dark"}`}
                        >
                            {
                            mode === "dark" ?
                            <SunIcon className={"fill-colors-dark"} />
                            : <MoonIcon className={"fill-colors-dark"} />
                        }
                        </button>
    
                    </nav>
                </motion.div>

                : null}
            
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

        </header>
    )
}

export default NavBar 