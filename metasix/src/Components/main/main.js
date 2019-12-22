import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Questions from '../questions/questions';
import Lista from '../lista/lista';

class Main extends Component{
    render(){
        return(
            <div className='main'>
                <ul className='main__list'>
                    <li><a className='main__itens' href='#'>HOME</a></li>
                    <li><a className='main__itens' href='#'>FAQ</a></li>
                    <li><a className='main__itens' href='#'>LOCAIS</a></li>
                    <li><a className='main__itens' href='#'>CATEGORIAS</a></li>
                </ul>
                <Questions/>
                <Lista/>
            </div>
        );


    }

}
export default Main;