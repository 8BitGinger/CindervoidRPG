import React from 'react'
import {Link} from 'react-router-dom';

const VidBox = ({ heading, videoSrc }) => {
  return (
        <div className="vid-box">
          <h2>{heading}</h2>
      <iframe width="560" height="315" src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


      </div>
  )
}

const VidBoxButton = ({ buttonText, buttonLink, heading, videoSrc }) => {
  return (
            <div className="vid-box">
          <h2>{heading}</h2>
      <iframe width="560" height="315" src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <button className='about-button'>
        <Link  to={buttonLink}>{buttonText}</Link>
      </button>
      </div>
  )
}

const VidBoxButtonExternal = ({ buttonText, buttonLink, heading, videoSrc }) => {
  return (
            <div className="vid-box">
          <h2>{heading}</h2>
      <iframe width="560" height="315" src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button className='about-button'>
          <Link target='_blank' to={buttonLink}>{buttonText}</Link>
        </button>
      </div>
  )
}

const VidBoxButtonDisabled = ({ buttonText, buttonLink, heading, videoSrc }) => {
  return (
            <div className="vid-box">
          <h2>{heading}</h2>
      <iframe width="560" height="315" src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button className='about-button' disabled>{buttonText}</button>
      </div>
  )
}

export { VidBox, VidBoxButton, VidBoxButtonExternal, VidBoxButtonDisabled };