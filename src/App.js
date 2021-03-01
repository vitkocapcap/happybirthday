import React, {Component} from 'react';
import SignIn from './components/SignIn/SignIn';
import TurnOnTheLight from './components/TurnOnTheLight/TurnOnTheLight';
import MusicAndCake from './components/MusicAndCake/MusicAndCake';
import Wishes from './components/Wishes/Wishes';
import Video from './components/Video/Video';
import Audio from './components/Audio/Audio';
import Footer from './components/Footer/Footer';


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
                <div>
                  <TurnOnTheLight
                    onRouteChange={this.onRouteChange}
                  />
                </div>
                
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
                 
                    <Video
                    onRouteChange={this.onRouteChange}
                    />
   
        }
          <Footer/>
      </div>
    );
  }
}

export default App;