import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyA6KkxGlLM0gC_QaY_n4ELBZHcubK8s8hk",
      authDomain: "manager-30d79.firebaseapp.com",
      databaseURL: "https://manager-30d79.firebaseio.com",
      projectId: "manager-30d79",
      storageBucket: "manager-30d79.appspot.com",
      messagingSenderId: "995729576119"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
