import React from 'react';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Header() {
  return (
    <motion.div
      className="flex flex-col mx-2 gap-5 items-center justify-center mt-20 sm:mt-40"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-8xl font-semibold text-center font-rubik bg-clip-text text-transparent bg-gradient-to-b from-violet-700 from-15% via-violet-300 dark:via-violet-500 to-indigo-700"
        variants={textVariants}
      >
        <motion.span variants={textItemVariants}>Hi,</motion.span>{' '}
        <motion.span variants={textItemVariants}>I'm</motion.span>{' '}
        <motion.span variants={textItemVariants}>Rachid</motion.span>
      </motion.h1>
      <motion.p
        className="text-lg text-center font-semibold text-violet-600"
        variants={textVariants}
      >
        <motion.span variants={textItemVariants}>I'm</motion.span>{' '}
        <motion.span variants={textItemVariants}>a</motion.span>{' '}
        <motion.span variants={textItemVariants}>full</motion.span>{' '}
        <motion.span variants={textItemVariants}>stack</motion.span>{' '}
        <motion.span variants={textItemVariants}>developer</motion.span>
      </motion.p>
      <motion.p
        className="text-center text-violet-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        I build websites and web applications, love to learn new things and solve problems
      </motion.p>
    </motion.div>
  );
}

export default Header;