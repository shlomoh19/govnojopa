import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';

import './Video.scss'

const VideoJs = ({ videoURL, image, title }) => {
    const playerRef = useRef()



    useEffect(() => {
        const player = videojs(playerRef.current, {
            controlBar: true,
            loop: true,
            preload: "none"
        }, () => {
            player.src(videoURL);
            player.poster(image);
        });

        return () => {
            player.dispose();
        };
    }, []);

    return (
        <div className="video-wrapper">
            <div data-vjs-player>
                <video
                    id={`video_${title}`}
                    ref={playerRef}
                    className="video-js vjs-16-9 video"
                    playsInline
                />
            </div>
        </div>
    );
}

export default VideoJs