import React from "react";
import './App.css';

import VideoJS from './VideoJS';
import VideoPlayer from "./VideoPlayer";

function App() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    sources: [{
      src: 'http://127.0.0.1:3000/sample.mp4',
      type: 'video/mp4'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      console.log('Player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  }

  // <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
  // <VideoPlayer {...videoJsOptions} />
  return (
    <>
      <VideoPlayer {...videoJsOptions } />
    </>
  );
}

export default App;
