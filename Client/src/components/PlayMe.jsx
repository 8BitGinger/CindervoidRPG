import song from '../assets/audio/background2.mp3';
import { useState } from 'react';
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";


const PlayMe = () => {
  const [play, setPlay] = useState(false);
  const [audio] = useState(new Audio(song));

  audio.volume = 0.1;
  audio.loop = true;

  const togglePlay = () => {
    setPlay(!play);
    if (!play) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="play-me">
      <div onClick={togglePlay}>
        {play ? (
          <>
            <RiPauseCircleFill className="playIcon" />
          </>
        ) : (
          <>
            <RiPlayCircleFill className="playIcon" />
          </>
        )}
      </div>
    </div>
  );
};

export default PlayMe;