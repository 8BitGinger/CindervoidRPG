import React from 'react'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../Utils/variants';

const About = () => {
  return (
    <section className="about"

    >
      <h1>About Cindervoid</h1>


      <motion.p
            variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
        Cindervoid is a dynamic Tabletop Role-Playing Game built for maximum action and minimal downtime. Get to the good stuff faster with Quick Character Building, dive into intense scenarios with Fast-Paced Gameplay, and lose yourself in Immersive Storytelling. Our mission is to build a roaring community of Keepers and adventurers. Join us on our video podcast as we showcase the system in action—that’s where your next adventure begins!
      </motion.p>


      <iframe width="560" height="315" src="https://www.youtube.com/embed/ppx2Wa5c5hE?si=33--TaxccYSsVKJZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      <button className='about-button'>
        <Link to="./sphere">Explore the Sphere</Link>
      </button>

      <h1>Message from the Creator</h1>


      <iframe width="560" height="315" src="https://www.youtube.com/embed/NHONt-1fmdY?si=llrSbuEGnUtyi8wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <button className='about-button'

      >
        <Link to="./contact">Join the Fun!</Link>
      </button>

      <h1>4 Cornerstones of a Hero</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/14SupFtb4ZQ?si=b-q6lATjWE-_jMIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



      <h1>Bloodlines</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JhjsEFQKXzU?si=RIc5hIZ5GOsW9Dn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



            <h1>Essence</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/14SupFtb4ZQ?si=b-q6lATjWE-_jMIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  <h1>Spark</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/PwPdfetbE9s?si=BynsCrfd89iIg47z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h1>Attunements</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/oxJh1uzLe4U?si=8tb0y_qCfoxD7Ze6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </section>
  )
}

export default About