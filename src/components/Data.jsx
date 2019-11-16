import React, { Component } from 'react';
import axios from "axios";

class Data extends Component {


  api() {
    axios
      .get(
'http://makeup-api.herokuapp.com/api/v1/products.json'
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })

        .catch(function (error) {
          // handle error
        
        })
}
 


  render() {
    return (
      <div>
<h1>Hello</h1>
      </div>
    );
  }
}


export default Data;