import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

const particlesOptions = {
      particles: {
        number: {
          value: 70,
          density: {
            enable: true, 
            value_area: 500
          }

        }
      }
    }
const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id:'',
    name:'',
    email:'',
    entries:0,
    joined: '',
  }

}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
    }  

  onRouteChange = (route) => {
    if(route==='signout'){
      this.setState(initialState)
    } else if(route==='home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route:route});
  }


  render(){
    const { isSignedIn, route } =this.state;
    return (
      <div className="App">
        <Particles  className='particles'
            params={particlesOptions}
          />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             
        }
      </div>
    );
  }
}

export default App;
