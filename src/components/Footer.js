import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    
    <footer className='w-full border-t-2 border-solid border-colors-dark font-medium text-lg dark:border-colors-light dark:text-colors-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:!py-2 lg:!text-sm'>    
          <div className='flex items-center lg:py-2'>Site réalisé avec NextJS
          </div>
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </Layout>
    </footer>
  )
}

export default Footer 