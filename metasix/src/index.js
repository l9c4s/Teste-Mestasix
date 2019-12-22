import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import './Components/header/header.css';
import './Components/questions/questions.css';
import './Components/main/main.css';
import './Components/lista/lista.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';



ReactDom.render(
<App/>,
document.getElementById("root")
);