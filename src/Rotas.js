import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './rotas/home/Home';
import Cadastro from './rotas/cadastro/Cadastro';
import Login from './rotas/login/Login';
import App from './rotas/app/AppSpot';
import Perfil from './rotas/perfil/Perfil.js';

export default () => {

  const PrivateRoute = ({ component: Component, ...props }) => (
    <Route { ...props } render={props => (
      localStorage.getItem("uid") ? (
        <Component { ...props }/>
      ) : (
        <Redirect to={{ pathname:"/login" }}/>
      )
    )}/>
  );

  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cadastro" component={Cadastro}/>
      <Route exact path="/login" component={Login}/>
      <PrivateRoute exact path="/app" component={App}/>
      <PrivateRoute exact path="/app/perfil" component={Perfil}/>
    </Switch>
  )
}