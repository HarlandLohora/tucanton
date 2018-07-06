import React from "react";
import {Switch,Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import viewClient from "./components/ViewClient";

export const Routes = () =>{
  return(
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/clientes" component={viewClient}/>
  </Switch>
);
}
