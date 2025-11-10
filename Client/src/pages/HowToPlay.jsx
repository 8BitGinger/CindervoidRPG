import { VidBoxButton, VidBox } from '../components/VidBox';
import { Link } from 'react-router-dom';

import charSheet from '../assets/Docs/charSheet1.pdf';
import qcc from '../assets/Docs/qcc.pdf';
import sparkCodex from '../assets/Docs/sparkCodex.pdf';

import harmonizer from '../assets/Docs/HarmonizerV4.pdf';
import adamant from '../assets/Docs/AdamantV4.pdf';
import luminary from '../assets/Docs/LuminaryV4.pdf';
import omen from '../assets/Docs/OmenV4.pdf';

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

    <Link class='link' to='https://characterbuilder-zeta.vercel.app/' target='_blank'>Try the Character Creator</Link>
    </div>
              <h1>Tips and Tricks</h1>


    <VidBox
      heading='Materials'
      videoSrc='https://www.youtube.com/embed/KQ7Ki5f2eTU?si=QWtzYU1sZCjqO5s8' />

    <h1>Downloads & Resources</h1>
    <div className="download">
    <br />
    <a href={charSheet} target='_download'>Character Sheet (1.8)</a>
    <br />
    <a href={sparkCodex} target='_download'>Spark Codex</a>
     <br />
    <a href={qcc} target='_download'>Quick Character Compendium</a>
</div>
<h2>Essence Sheets</h2>
    <div className="download">
    <br />
    <a href={harmonizer} target='_download'>Harmonizer</a>
    <br />
    <a href={adamant} target='_download'>Adamant</a>
     <br />
    <a href={luminary} target='_download'>Luminary</a>
    <br />
    <a href={omen} target='_download'>Omen</a>
</div>
    <br />
    <button className='btn'><Link to='/'>Back Home</Link></button>

    </div>
    )
}

export default HowToPlay