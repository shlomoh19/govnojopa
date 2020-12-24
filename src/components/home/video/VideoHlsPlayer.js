import React, { Component } from 'react';

import videojs from 'video.js';
import 'video.js/dist/video-js.css';

window.videojs = videojs;
require('videojs-contrib-hls/dist/videojs-contrib-hls.js');

class VideoPlayer extends Component {
    startVideo(video) {
        videojs(video);
    }

    render() {
        return (
            <video ref={this.startVideo} width={this.props.width} height={this.props.height} className="video-js vjs-default-skin" controls>
                <source src={this.props.source} type="application/x-mpegURL" />
            </video>
        );
    }
}

export default VideoPlayer;