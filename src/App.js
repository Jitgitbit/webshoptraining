import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <Grid>
      <Cart />
      <br /><hr />
      <CategoryList />

      <Switch>
        <Route path="/categories/:catId/products" component={ProductList} />
        <Route path="/beetle">Beetle</Route>
        <Route path="/cat">Cat
        </Route>
      </Switch>
    </Grid>
  );
}

export default App;
