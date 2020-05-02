import React from "react";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
