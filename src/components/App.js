import React from 'react';
import './App.css';

//components
import {Header} from "./global/Header";
import {Footer} from "./global/Footer";
import {Content} from "./global/Content";

function App() {
  return (
    <div className="App">
        <Header/>
        <Content>
            Hey
        </Content>
        <Footer/>
    </div>
  );
}

export default App;
