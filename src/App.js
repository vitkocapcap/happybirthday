import React, {Component} from 'react';
import SignIn from './components/SignIn/SignIn';
import TurnOnTheLight from './components/TurnOnTheLight/TurnOnTheLight';
import MusicAndCake from './components/MusicAndCake/MusicAndCake';
import Wishes from './components/Wishes/Wishes';

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      route: 'wishes',
    }
  }

  onRouteChange = (route)=>{
    this.setState({route: route})
  }

  render() {
    const {route} = this.state;
    return (
      <div className="App">
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
                    <p>wait</p>
              
        }
      </div>
    );
  }
}

export default App;