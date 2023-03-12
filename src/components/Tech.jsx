import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWarapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'


const Tech = () => {
  return(
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='text-center'>
        <p className={`${styles.sectionSubText}`}>
         Hand on experience
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Technologies
        </h2>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWarapper(Tech,"technologies")