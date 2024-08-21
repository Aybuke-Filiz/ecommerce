
import { Route, Switch } from 'react-router-dom'
import ShopPage from "./pages/ShopPage"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';

function App() {
  

  return (
    <>
      <Switch>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App
