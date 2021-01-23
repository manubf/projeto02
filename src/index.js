import React from 'react';
import ReactDOM from 'react-dom';
//import Main from './pages/main';
import { criarServidor } from './services/mirage-server';
import reportWebVitals from './reportWebVitals';
import 'typeface-montserrat';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

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
  // <React.StrictMode>
  //   <Main />
  // </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

