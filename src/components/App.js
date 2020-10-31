import React from 'react';
import './App.css';

//components
import {Header} from "./global/Header";
import {Footer} from "./global/Footer";
import {Content} from "./global/Content";

import {Maps} from "./map";

function App() {
  return (
    <div className="App">
        <Header/>
        <Content>
            <Maps/>
        </Content>
        <Footer/>
    </div>
  );
}

export default App;
