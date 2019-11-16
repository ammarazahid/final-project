import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



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

  render(){
    console.log(this.state.product);
    console.log()
  return (
    <div className="App">
     <Header />
     <Navbar />
     <Main />
    </div>
  );
}
}

export default App;
