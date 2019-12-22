import React, { Component } from 'react';
import Header from "./Components/header/header";
import Main from "./Components/main/main";


class App extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Main/>
            </div>
        );
    }
}
export default App;