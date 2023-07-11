import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaMediumM } from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/niltonsegura/">
          <BsLinkedin  />
        </a>
      </div>
      <div>
        <a href="https://github.com/Nkaleth/">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://medium.com/@nseguralu">
          <FaMediumM />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia