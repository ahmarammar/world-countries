import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header 
    initial={{ opacity: 0 }}
    transition={{ delay: 0.2, duration: 1 }}
    animate={{ opacity: 1 }}
    className='shadow-md py-10 px-8 lg:px-12 text-xl font-bold tracking-normal pointer-events-none select-none'>
      <h1>Where in the world?</h1>
    </motion.header>
  )
}

export default Header