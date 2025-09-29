import React from 'react'
import { motion  } from 'framer-motion';
import {Link} from 'react-router-dom';
import { fadeIn } from '../Utils/variants';
import fullMap from '../assets/images/fullMap.jpg';

const Sphere = () => {
  return (
    <div className='sphere' >
      <h1>The Sphere holds 17 Continents and dozens of Islands, each with unique Races, Kingdoms and Cultures.</h1>
      <Link to='./full-map' target="_blank" rel="noopener noreferrer">
      <motion.img src={fullMap} alt="Map of the Sphere"
         variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  cursor="false"
                  viewport={{ once: false, amount: 0.7 }}
      style={{width: '100%', height: 'auto'}} />
      </Link>
      <p>Explore the vast and diverse world of the Sphere, where adventure awaits at every turn. From the icy tundras of the North to the scorching deserts at the equator, each continent offers its own unique challenges and opportunities for heroes to ascend.</p>
      <p>Discover ancient ruins, bustling cities, and untamed wilderness as you journey through this richly detailed setting. Whether you're a seasoned adventurer or a newcomer to the world of tabletop RPGs, the Sphere has something for everyone.</p>
      <p>Join us as we delve into the lore and legends of the Sphere, uncovering hidden secrets and forging new paths in this ever-evolving world.</p>
    </div>
  )
}

export default Sphere