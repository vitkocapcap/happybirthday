import React from 'react';
import YouTube from 'react-youtube';
import './Video.css'
import Next from './Next';

class Video extends React.Component {
  constructor(){
    super();
}
  render() {
    const opts = {
      height: '500',
      width: '900',
      playerVars: {
        autoplay: 1,
      },
    };
    

    return <div 
              class="pt5 vh-100 dt w-100 tc bg-dark-gray white cover"
              style= {{background:'url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center'}}>
              <YouTube videoId="-NQhnXUEgFU" opts={opts} onReady={this._onReady} />
              <Next
                onRouteChange={this.props.onRouteChange}
              />
           </div>;
    
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;