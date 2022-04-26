import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import { NavBar,SetGame } from "./ui-components";
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { Game } from "./models";
import { useState, useEffect } from "react";
import "./App.css";

class EditGame extends Component {
    render(){
        return (<PutGame />);
    }
}

  function PutGame() {
    const { gid } = useParams();
    const [gm, setGame] = useState(0);
    useEffect(()=>{
      const pullData = async() => {
        const games = await DataStore.query(Game, g => g.id("eq", gid));
        console.log(games);
        setGame(games[0]);
        console.log(games[0].plate);
        }
        pullData()
      }, []) 
      return (
        <div><p>{gid}</p>
          <NavBar />
          <SetGame game={gm}/>
        </div>
      );
    }

export default EditGame