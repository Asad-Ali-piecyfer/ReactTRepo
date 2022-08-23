import * as React from "react";
import "./App.css";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import ProductAllComponent from "./Components/product/productAll.component";
import ProductComponent from "./Components/product/product.component";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Switch>
          <Route exact path="/" component={ProductAllComponent} />
          <Route exact path="/product/:id?" component={ProductComponent} />
          {/*<Route exact path="/product/:id" component={ProductComponent} />*/}
        </Switch>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
