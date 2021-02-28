import React, {Component} from 'react';
import SignIn from './components/SignIn/SignIn';
import TurnOnTheLight from './components/TurnOnTheLight/TurnOnTheLight';
import MusicAndCake from './components/MusicAndCake/MusicAndCake';
import Wishes from './components/Wishes/Wishes';
import Video from './components/Video/Video';
import Next from './components/Video/Next';
import Audio from './components/Audio/Audio';


import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'signin',
    }
  }

  onRouteChange = (route)=>{
    this.setState({route: route})
  }

  render() {
    const {route} = this.state;
    return (
      <div className="App">
        <div>
          <Audio/>
        </div>
        { route === 'signin'
            ?
            <SignIn 
              onRouteChange={this.onRouteChange}
            />
            :
            route === 'turnonthelight'
              ?
                <TurnOnTheLight
                  onRouteChange={this.onRouteChange}
                />
              :
                route === 'musicandcake'
                ?
                  <MusicAndCake
                    onRouteChange={this.onRouteChange}
                  />
                :
                  route === 'wishes'
                  ?
                    <Wishes
                      onRouteChange={this.onRouteChange}
                    />
                  :
                    <div >
                    <Video/>
                    <Next
                      onRouteChange={this.onRouteChange}
                    />

                    </div>
              
        }
      </div>
    );
  }
}

export default App;