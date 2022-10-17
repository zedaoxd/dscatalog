import Navbar from 'components/Navbar';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import ProductDetails from 'pages/ProductDetails';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from 'utils/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Route path="/admin/auth" >
        <Auth />
      </Route>
      <Redirect from="/admin" to="/admin/products" exact />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
