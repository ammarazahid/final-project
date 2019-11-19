import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Pencil from './components/Pencil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    }
  }

  componentDidMount() {

    // Make a request for a user with a given ID
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then((response) => {
        // handle success
        response.data.map(item => {
          console.log(item)
        })

        this.setState({
          product: response.data
        })
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })

  }

  render() {
    console.log(this.state.product);
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Pencil />
              </Route>
            </Switch>
          </div>
        </Router>
        <Header />
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
