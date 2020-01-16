import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Lista extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }
    componentDidMount() {
        var config = {
            headers: { 'X-Parse-Application-Id': 'br.com.metasix.poc' }
        };
        Axios.get('https://poc.metasix.solutions/parse/classes/FAQ', config)
            .then(({ data }) => {
                this.setState({ questions: data.results })
            })
    }
    ordena(a,b){
        if(a.position < b.position){
            return -1;
        }
        if(a.position > b.position){
            return 1;
        }
    }
    delete(id){
        let rest = this.setState.questions
            rest.forEach((question,index) => {
            if(question.objectId === id){
                rest.splice(index,1);
                this.setState({question:rest})
            }
            });
    }
    render() {
        const { questions } = this.state    
        return (
            <div className='lista'>
                <div className='lista__header'>
                    <p className='lista__text'>Pergunta</p>
                    <div className='lista__controle'>
                        <button className='lista__button'><i className="fa fa-plus-circle"></i> Nova Pergunta</button>
                        <p className='lista__topico'>Ordem</p>
                        <p className='lista__topico'>Editar</p>
                        <p className='lista__topico'>Excluir</p>
                    </div>
                </div>
                <div className='lista__conteudo'>
                    {questions.sort(this.ordena).map((question) => {
                        return (
                            <div className='lista__item'>
                                <p className='lista__conteudo'>{question.question}</p>
                                <div className='lista__cont'>
                                    <span className='lista__action'>{question.position + 1} </span>
                                    <button className='lista__edit'><i className="fa fa-edit"></i></button>
                                    <button type='button' className='lista__trash'onClick={() => this.delete(question.objectId)}><i className="fa fa-trash" ></i> </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Lista;