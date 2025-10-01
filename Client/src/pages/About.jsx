import React from 'react'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../Utils/variants';
import { VidBoxButton, VidBox, VidBoxButtonDisabled, VidBoxButtonExternal } from '../components/VidBox';
import theReplacementsLogo from '../assets/images/theReplacementsLogo.jpg';
import brokenBannersLogo from '../assets/images/brokenBannersLogo.jpg';
import flameVnullLogo from '../assets/images/flameVnull.png';

const About = () => {
  return (
    <section className="about"

    >
      <div className="spacer"></div>
      <h1>About Cindervoid</h1>


      <motion.p
            variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
        Cindervoid is a dynamic Tabletop Role-Playing Game built for maximum action and minimal downtime. Get to the good stuff faster with Quick Character Building, dive into intense scenarios with Fast-Paced Gameplay, and lose yourself in Immersive Storytelling. Our mission is to build a roaring community of Keepers and adventurers. Join us on our video podcast as we showcase the system in action—that’s where the real adventure begins!
      </motion.p>

      <div className="about-divider">

      <VidBoxButton heading="The Story" videoSrc="https://www.youtube.com/embed/ppx2Wa5c5hE?si=33--TaxccYSsVKJZ" buttonText="Explore the Sphere" buttonLink="/sphere" />

      <VidBoxButtonExternal 
        heading='Message from the Creator' 
        videoSrc="https://www.youtube.com/embed/NHONt-1fmdY?si=llrSbuEGnUtyi8wI" 
        buttonText="Check out my other Game!" 
        buttonLink="https://www.gumshoerpg.com" 
      />
      

  
      </div>

      <motion.img
        variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}

      src={flameVnullLogo} alt="Flame Vnull Logo" className='flame-vnull-logo'/>

      <h2 className='italic'>This game was created right here in West Texas!</h2>


      <h1>Current Campaign</h1>
      <h3>The Replacements</h3>
      <img src={theReplacementsLogo} alt="The Replacements Logo" className='the-replacements-logo'/>
      <motion.p
            variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
        The Replacements is a campaign within my game Cindervoid,  It will be a recorded podcast (for the first time) that follows a group of misfit adventurers as they navigate the treacherous world of the Sphere.  Through a series of dramatic events they become the world's best hope of being the new Keepers. With a mix of humor, heart, and high-stakes herorics, this campaign is sure to keep you on the edge of your seat. Tune in to hear the latest episodes or sign up to join the adventure!
      </motion.p>

      <VidBoxButtonDisabled
        heading='Trailer...coming soon'
        videoSrc="https://www.youtube.com/embed/4JHk2b1b7mA?si=U1eX1YHjvVYHjvVY"
        buttonText="Listen to the Podcast!"
        buttonLink="https://linktr.ee/thereplacements"
      />

      <h1>Next Campaign</h1>
      <img src={brokenBannersLogo} alt="Broken Banners Logo" className='broken-banners-logo'/>
      <motion.p
            variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
        Broken Banners is an upcoming campaign within Cindervoid that will take players on a thrilling journey through a world on the brink of chaos. As tensions rise between rival factions, a group of unlikely heroes must band together to uncover a conspiracy that threatens to tear the Sphere apart. With enemies from the Past, intricate plot twists, and pulse-pounding action, this campaign promises to be an unforgettable adventure. Stay tuned for more details and get ready to join the fight for the future of the Sphere!
      </motion.p>
      <div className="flex twin-buttons">
    <motion.button className='sphere-button'
            variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
        <Link to="/sphere">Learn More</Link>
      </motion.button>
          <motion.button className='sphere-button'
            variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
        <Link to="/how-to-play">How to Play?</Link>
      </motion.button>
    </div>
      <div className="spacer-large "></div>
      <div className="spacer"></div>
      
    </section>
  )
}

export default About