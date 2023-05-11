import React from 'react'
import { styles } from "../style";
import { testImage2 } from '../assets';


const About = () => {
  return (
    <section className='container relative w-full h-screen mx-auto '>
      <p>about</p>
			<img src={testImage2} alt="testImage2" className='w-full' />
		</section>
  )
}

export default About