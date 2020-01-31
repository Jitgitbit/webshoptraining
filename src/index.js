import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Container className="App">
      <Router>
        <App />
      </Router>
    </Container>
  </Provider>,
  document.getElementById('root'),
);
