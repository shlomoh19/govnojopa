import React from 'react';
import ReactHlsPlayer from 'react-hls-player'

import './VideoHLS.scss';

const VideoHLS = ({ videoURL, image, title, className }) => {
    return (
        // <div className="video-wrapper">
            <ReactHlsPlayer
                className={'video-wrapper'}
                url={videoURL}
                poster={image}
                autoplay={false}
                controls={true}
                id={`video_${title}`}
            />
        // </div>
    )
}

export default VideoHLS;