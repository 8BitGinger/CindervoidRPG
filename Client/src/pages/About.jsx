import React from 'react'
import aboutVid from '../assets/videos/about.mp4';
import creatorVid from '../assets/videos/CreatorMessage.mp4';
import raceSlideshow from '../assets/videos/RaceSlideshow.mp4';
import cornerstones from '../assets/videos/cornerstones.mp4';
import essence from '../assets/videos/essence.mp4';
import spark from '../assets/videos/spark.mp4';
import attunements from '../assets/videos/attunements.mp4';
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
      <video className="about-video" controls

      >
        <source src={aboutVid} type="video/mp4" loading="lazy"/>
        Your browser does not support the video tag.
      </video>
      <button className='about-button'

      >
        <a href="./contact">Want to be a player?</a>
      </button>

            <h1>Message from the Creator</h1>
            <video className="about-video" controls loading="lazy">

      
        <source src={creatorVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

            <button className='about-button'

      >
        <a href="./contact">Join the Fun!</a>
      </button>

      <h1>4 Cornerstones of a Hero</h1>
      <video className="about-video" controls loading="lazy">


        <source src={cornerstones} type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      <h1>Bloodlines</h1>
      <video className="about-video" controls loading="lazy">


        <source src={raceSlideshow} type="video/mp4" />
        Your browser does not support the video tag.
      </video>



            <h1>Essence</h1>
      <video className="about-video" controls loading="lazy">


        <source src={essence} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

                  <h1>Spark</h1>
      <video className="about-video" controls loading="lazy">


        <source src={spark} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1>Attunements</h1>
      <video className="about-video" controls loading="lazy">

        <source src={attunements} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </section>
  )
}

export default About