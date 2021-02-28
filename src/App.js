import React, {Component} from 'react';
import SignIn from './components/SignIn/SignIn'
import TurnOnTheLight from './components/TurnOnTheLight/TurnOnTheLight'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      route: 'turnonthelight',
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
                <p>Music and cake </p>
              
        }
      </div>
    );
  }
}

export default App;