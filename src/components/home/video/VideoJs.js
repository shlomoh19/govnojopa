import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import './Video.scss'

const VideoJs = ({ videoURL, image }) => {
    const [play, setPlay] = useState(false)

    const playerRef = useRef()

    let player

    useEffect(() => {
        player = videojs(playerRef.current, { controlBar: true, loop: true, textTrackSettings: false }, () => {
            player.src(videoURL);
            player.poster(image)
        });

        window.play = player

        return () => {
            player.dispose();
        };
    }, []);

    return (
        <div className="video-wrapper">
            <div data-vjs-player >
                <video ref={playerRef} className="video-js vjs-16-9 video" playsInline />
            </div>
        </div>
    );
}

export default VideoJs