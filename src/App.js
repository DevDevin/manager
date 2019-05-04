import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
