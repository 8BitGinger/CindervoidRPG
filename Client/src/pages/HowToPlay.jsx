import { VidBoxButton, VidBox } from '../components/VidBox';
import { Link } from 'react-router-dom';

const HowToPlay = () => {
  return (
    <div className='about how-to-play'>

      <h1>Getting Started</h1>
    <VidBoxButton heading='Cornerstones' videoSrc="https://www.youtube.com/embed/14SupFtb4ZQ?si=b-q6lATjWE-_jMIB" buttonText="Sign Up!" buttonLink="/contact" />

      <h1>Four Cornerstones</h1>
      <div className="flex">

      <VidBox 
      heading='Bloodlines' 
      videoSrc='https://www.youtube.com/embed/JhjsEFQKXzU?si=RIc5hIZ5GOsW9Dn0' />

      <VidBox
      heading='Essence'
      videoSrc='https://www.youtube.com/embed/jqX4kShRrI0?si=yJ3MV1JlPo2FFswF' />
      
      
      

      <VidBox
      heading='Spark'
      videoSrc='https://www.youtube.com/embed/PwPdfetbE9s?si=BynsCrfd89iIg47z' />



      <VidBox
      heading='Attunements'
      videoSrc='https://www.youtube.com/embed/oxJh1uzLe4U?si=8tb0y_qCfoxD7Ze6' />

    </div>
              <h1>Tips and Tricks</h1>


    <VidBox
      heading='Materials'
      videoSrc='https://www.youtube.com/embed/KQ7Ki5f2eTU?si=QWtzYU1sZCjqO5s8' />

    <h1>Downloads & Resources</h1>
    <p>Comming Soon!</p>
    <br />
    <a href='../assets/Docs/Cindervoid Char Sheet 1.6.pdf' target='_download'>Digital Character Builder</a>
    <br />
    <button className='btn'><Link to='/'>Back Home</Link></button>

    </div>
    )
}

export default HowToPlay