import React, { useState, useEffect } from 'react';
import '../assets/styles/modal.css'; // Import the CSS file

const FIRST_VISIT_KEY = 'website_first_visit';



const VideoWelcomeModal = ({ videoUrl }) => {
  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check local storage on component mount
    const hasVisited = localStorage.getItem(FIRST_VISIT_KEY);

    if (!hasVisited) {
      setIsOpen(true);
      // Set the flag in local storage so it won't pop up again
      localStorage.setItem(FIRST_VISIT_KEY, 'false');
    }
  }, []); // Empty dependency array ensures this runs only once after initial render

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

  // Use a simple HTML <video> tag for the fullscreen video
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={closeModal}>
            &times;
        </button>
        <video
          className="fullscreen-video"
          src={videoUrl}
          autoPlay={true} // Auto-play the video
          controls={false} // Show video controls (play/pause, volume)
          muted={true} // Mute the video to allow auto-play in browsers
          loop={false} // Optional: loop the video
          onEnded={closeModal} // Optional: close modal when video finishes
          poster="../assets/images/Cindervoid Logo png.png" // Optional poster image
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoWelcomeModal;