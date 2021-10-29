import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default class VideoPlayer extends React.Component {
    componentDidMount() {
        console.log(this.videoNode);
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log(this.videoNode, this);
        });
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return(
            <div>
                <div data-vjs-player>
                    <video ref={ node => this.videoNode = node } className="video-js vjs-big-play-centered"></video>
                </div>
            </div>
        )
    }
}