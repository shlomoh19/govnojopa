import React, { useEffect, useState } from 'react'
import $ from "jquery";
import './Video.scss'


const VideoWrapper = ({ video, title }) => {
    const [controlsIsOpen, setControlsIsOpen] = useState(false);
    const [controlsWillOpen, setControlsWillOpen] = useState(false);
    const [controlsIsClose, setControlsIsClose] = useState(false);
    const [controlsWillClose, setControlsWillClose] = useState(false);

    const [controlsStyles, setControlsStyles] = useState("controls");

    const [play, setPlay] = useState(false)

    const [videoElement, setVideoElement] = useState()
    const [timeUpdate, setTimeUpdate] = useState()


    useEffect(() => {
        if (controlsWillOpen) {
            setControlsWillClose(false);
            setControlsIsClose(false);
            setTimeout(() => {
                if (controlsWillOpen) {
                    setControlsIsOpen(true);
                    setControlsWillOpen(false);
                    setControlsWillClose(false);
                    setControlsIsClose(false);
                }
            }, 300)
        }
    }, [controlsWillOpen]);

    useEffect(() => {
        if (controlsWillClose && !controlsIsClose) {
            setControlsWillOpen(false);
            setControlsIsOpen(false);
            setTimeout(() => {
                if (controlsWillClose) {
                    setControlsIsClose(true);
                    setControlsWillClose(false);
                    setControlsWillOpen(false);
                    setControlsIsOpen(false);
                }
            }, 300)
        }
    }, [controlsWillClose]);

    useEffect(() => {
        if (controlsWillOpen) {
            setControlsStyles("controls controls-will-open");
        }
        if (controlsWillClose) {
            setControlsStyles("controls controls-will-close");
        }
        if (controlsIsOpen && controlsWillOpen) {
            setControlsStyles("controls controls-will-open controls-open");
        }
        if (controlsIsClose && controlsWillClose) {
            setControlsStyles("controls controls-will-close controls-closed");
        }
    }, [controlsWillOpen, controlsWillClose, controlsIsClose, controlsIsOpen]);

    useEffect(() => {
        const video = document.getElementById(`video${title}`)
        const orangeBar = document.getElementById(`orangeBar${title}`)

        setVideoElement(video)

        document.addEventListener('mouseout', e => {
            if (e.target.hasAttribute('orange')) {
                return
            }
            setControlsWillClose(true);
        })

        video.addEventListener('timeupdate', () => {
            setTimeUpdate((video.currentTime / video.duration) * 100 + '%')
        })

        orangeBar.addEventListener('click', e => {
            const offset = $(orangeBar).offset();
            const relativeX = (e.pageX - offset.left);
            const resultPercentProgress = (relativeX * 100) / orangeBar.offsetWidth;
            const currentVideoTime = (video.duration * resultPercentProgress) / 100;
            video.currentTime = currentVideoTime
        });
    }, []);


    const onControlsOpen = () => setControlsWillOpen(true);
    const playPauseVideo = () => {
        if (videoElement.paused) {
            videoElement.play();
            setPlay(true);
        } else {
            setPlay(false);
            videoElement.pause();
        }
    }

    return (
        <div className="video-wrapper" >
            <video
                    orange={'orange'}
                    onMouseOver={onControlsOpen}
                    id={`video${title}`}
                    className="video"
                    src='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
                    onClick={playPauseVideo}
                />
            <div orange={'orange'} className={controlsStyles}>
                <div
                    id={`orangeBar${title}`}
                    orange={'orange'}
                    className={"orange-bar"}
                >
                    <div
                        orange={'orange'}
                        style={timeUpdate ? { width: timeUpdate } : { width: '0%' }}
                        className="orange-juice"
                    />
                </div>
                <div orange={'orange'} className={controlsIsOpen ? "buttons buttons-active" : "buttons"}>
                    <button
                        onClick={playPauseVideo}
                        orange={'orange'}
                        id={`play-pause${title}`}
                        className={play ? "play-pause pause" : "play-pause play"}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoWrapper;
