import React from 'react'
import {motion} from 'framer-motion';
import { fadeIn } from '../Utils/variants';

const Contact = () => {
  return (
    <div className="contact">
    <motion.iframe className='contact-form' src="https://docs.google.com/forms/d/e/1FAIpQLSdB29PI_yZB_pnqSkVXA0Z7a4y-xi7sN1XhAE9yCQEWFre3XA/viewform?embedded=true" width="640" height="3488" frameBorder="0" marginHeight="0" marginWidth="0" variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>Loading…</motion.iframe>
  </div>
  )
}

export default Contact