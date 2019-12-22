import React, { Component } from 'react';
import search from '../../assets/icons/search-solid.svg';

class Questions extends Component {
    render() {
        return (
            <div className='questions'>
                <div className='questions__title'>
                    <p className='questions__text'>FAQ - PERGUNTAS FREQUENTES</p>
                    <div className='questions__btn'>
                        <input className='questions__input' type='text' placeholder='Busque por termo...'/>
                        <button className='questions__search'>
                            <i className='fa fa-search icon--sm'></i>
                            BUSCAR
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Questions;