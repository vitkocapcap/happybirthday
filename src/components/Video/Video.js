import React from 'react';
import YouTube from 'react-youtube';
import './Video.css'

class Video extends React.Component {
  render() {
    const opts = {
      height: '500',
      width: '900',
      playerVars: {
        autoplay: 1,
      },
    };
    

    return <div class="pt4">
      <YouTube videoId="OTt2rrQgcUk" opts={opts} onReady={this._onReady} />
      </div>;
    
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;