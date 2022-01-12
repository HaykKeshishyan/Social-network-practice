import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/profile"
            render={() => <Profile
              profilePage={props.state.profilePage}
              dispatchProfile={props.dispatchProfile} />} />
          <Route path="/Messages"
            render={() => <Dialogs
              dispatchDialogs={props.dispatchDialogs}
              dialogData={props.state.messagesPage.dialogData}
              messagesData={props.state.messagesPage.messagesData} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;