import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Pencil from './components/Pencil/Pencil';
import Eyes from './components/Eyes/Eyes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends Component {
  constructor() {
    super();
    this.state = {
      pencil: [],
      eyes: [],
    }
  }


  componentDidMount() {

    // Make a request for a user with a given ID
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then((response) => {
        // handle success
        const pencil = response.data.filter(item => {
          return item.category === 'pencil'
        })

        const eyes = response.data.filter(item => {
          return item.category === 'eyes'
        })

        this.setState({
          pencil: pencil,
          eyes: eyes,
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })

  }

  render() {
    const pencil = this.state.pencil;
    const eyes = this.state.eyes;

    return (
      <div className="App">
       <Header />
        <Router>
              <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/Pencil">
                <Pencil data={pencil} />
              </Route>
              <Route exact path="/Eyes">
                <Eyes data={eyes} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
