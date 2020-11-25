import React from 'react'
import ReactHlsPlayer from 'react-hls-player'
import './Video.scss'

const VideoHLS = ({ title }) => {
    return (
        <div className="video-hls_wrapper">
            <ReactHlsPlayer
                url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
                autoplay={false}
                controls={true}
                className="video-hls"
                id={`video${title}`}
            />
        </div>
    )
}

export default VideoHLS
