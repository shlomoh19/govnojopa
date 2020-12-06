import React, { useEffect, useRef, useState } from 'react'
import PlayIcon from '../../../UI/icons/PlayIcon'
import './simple-video.scss'

const SimpleVideo = ({ videoURL, image, title }) => {
    const [play, setPlay] = useState(false)

    const mediaRef = useRef()

    const togglePlayHandler = () => {
        setPlay(!play)
        mediaRef.current.play()
    }

    return (
        <div className="video-wrapper">
            <>
                <PlayIcon clickHandler={togglePlayHandler} className={!play ? "play visible-play" : "play"} />
                <img onClick={togglePlayHandler} src={image} className={!play ? "image_simple_video visible" : "image_simple_video"} />
            </>
            <video ref={mediaRef} onClick={togglePlayHandler} preload="metadata" className="video" id={`${title}_video`} width="100%" controls>
                <source src={videoURL} type="video/mp4" />
            </video>
        </div>
    )
}

export default SimpleVideo
