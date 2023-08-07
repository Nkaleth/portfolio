import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }} >
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Nilton</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>Full Stack Developer | Seeking Remote Opportunities | Eager to Learn New Technologies</p>
          </div>

          <a href="#contact me!">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='contact_button'>Contact Me!
            </motion.button>
          </a>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg"/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          className="overlay_circle"
        >
        </motion.img>

      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.javascript, images.react, images.ruby].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');