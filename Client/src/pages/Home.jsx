import React from 'react'
import bannerImage from '../assets/images/Cindervoid Logo png.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../Utils/variants';
import { TypeAnimation } from 'react-type-animation';
import VideoWelcomeModal from '../components/VideoWelcomeModal';
import myVideoUrl from '../assets/videos/CindervoidTeaser.mp4'
import {Link} from 'react-router-dom';



const Home = () => {
  return (
    <header className='home'>
        <motion.img
          src={bannerImage}
          alt="Banner"
          variants={fadeIn('down', 0.4)}
          initial="hidden"
          whileInView={'show'}
          cursor="false"
          viewport={{ once: false, amount: 0.7 }}
        />
        <div className="type">
          <TypeAnimation
          sequence={[
            'Welcome to Cindervoid...',
            4000,
            'A Land of Adventurers!',
            3000,
            'A World of Imagination!',
            3000,
            'A Community of Gamers!',
            1000,
      
       
          ]}
          speed={50}
          className="intro-type"
          wrapper="span"
          repeat={Infinity}
        />
      </div>
      <button className='home-button'>
        <Link to="./about">Get Started!</Link>
      </button>
            <VideoWelcomeModal videoUrl={myVideoUrl} />

    </header>
  )
}

export default Home