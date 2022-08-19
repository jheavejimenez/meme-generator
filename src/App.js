import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <MemeGenerator />
            </div>
        );
    }
}

export default App;
