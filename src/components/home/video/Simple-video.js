import React from 'react'
import './simple-video.scss'

const SimpleVideo = ({ videoURL, image, title }) => {
    return (
        <div className="video-wrapper">
            <video className="video" id={title} poster={image} width="500px" controls>
                <source src={videoURL} type="video/mp4" />
            </video>
        </div>
    )
}

export default SimpleVideo
