
import { motion  } from 'framer-motion';
import {Link} from 'react-router-dom';
import { fadeIn } from '../Utils/variants';
import fullMap from '../assets/images/fullMap.jpg';
import { VidBox } from '../components/VidBox';

const Sphere = () => {
  return (
    <div className='sphere' >
      <div className="spacer"></div>
      <h1>The Sphere holds 17 Continents and dozens of Islands, each with unique Bloodlines, Kingdoms, Cultures, and Customs.</h1>
            <p>Explore the vast and diverse world of the Sphere, where adventure awaits at every turn. From the icy tundras of the North to the scorching deserts at the equator, each continent offers its own unique challenges and opportunities for heroes to ascend.</p>

      <Link to='/full-map' target="_blank" rel="noopener noreferrer">
      <img src={fullMap} alt="Map of the Sphere"
       
      />
      </Link>
            <p>Discover ancient ruins, bustling cities, and untamed wilderness as you journey through this richly detailed setting. Whether you're a seasoned adventurer or a newcomer to the world of tabletop RPGs, the Sphere has something for everyone.</p>
      <h1>What are Bloodlines?</h1>
      <p>Bloodlines represent one of the core aspects of character identity in the Sphere. They define your character's heritage, abilities, and potential for growth.  Take a look at what each of the unique Bloodlines of The Sphere has to offer your character below!</p>
      <VidBox 
      heading='Bloodlines' 
      videoSrc='https://www.youtube.com/embed/JhjsEFQKXzU?si=RIc5hIZ5GOsW9Dn0' />
          <div className="flex twin-buttons">
    <motion.button className='sphere-button'
            variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
        <Link to="/contact">Sign Up</Link>
      </motion.button>
          <motion.button className='sphere-button'
            variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
        <Link to="/how-to-play">How to Play?</Link>
      </motion.button>
    </div>
      <p>Join us as we delve into the lore and legends of the Sphere, uncovering hidden secrets and forging new paths in this ever-evolving world.</p>

    </div>
  )
}

export default Sphere