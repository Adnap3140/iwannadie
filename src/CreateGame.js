import React, { Component } from 'react'
import { CreateDatComponent, NavBar } from "./ui-components";
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";

class CreateGame extends Component {
    render(){
        return (<PutGame />);
    }
}

  function PutGame() {
      return (
        <div>
            <NavBar />
            <CreateDatComponent />
        </div>
      );
    }

export default CreateGame