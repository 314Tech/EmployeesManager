import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import RouterComponent from "./components/Router";

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBfkr7fL7NRjlhlBHj0hnSbqcpP2s2UGpw",
      authDomain: "employee-manager-2586b.firebaseapp.com",
      databaseURL: "https://employee-manager-2586b.firebaseio.com",
      projectId: "employee-manager-2586b",
      storageBucket: "",
      messagingSenderId: "467399484227"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
