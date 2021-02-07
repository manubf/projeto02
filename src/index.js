import React from 'react';
import ReactDOM from 'react-dom';
import { criarServidor } from './services/mirage-server';
import reportWebVitals from './reportWebVitals';
import 'typeface-montserrat';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import "./index.css";

const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  criarServidor({ environment: ambiente });
}


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      {routes.map(route => (
        <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        />
      ))}
    </Switch>
   </Router>,
  
  document.getElementById('root')
);





reportWebVitals();

