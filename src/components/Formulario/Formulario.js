import React, { Component } from 'react';
import { ListaMoedas } from './ListaMoedas';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { converteMoedas } from '../../actions/index.js';

import './Formulario.css'
import { Coins } from 'phosphor-react';

class Formulario extends Component{
    constructor(props){
        super(props)

        this.onValueChange = this.onValueChange.bind(this);
        this.onValueDeChange = this.onValueDeChange.bind(this);
        this.onValueParaChange = this.onValueParaChange.bind(this);
        this.envia = this.envia.bind(this);

        this.state = {
            de: '',
            para: '',
            valor: 0,
        }
    }

    onValueChange(e){
        console.log (e.target.value)
        this.setState({valor: e.target.value})
    }

    onValueDeChange(e) {
        console.log("DE:", e.target.value)
        this.setState({de: e.target.value})

    }

    onValueParaChange(e) {
        console.log("PARA:", e.target.value)
        this.setState({para: e.target.value})
    }

    envia() {
        const dado = {
            de: this.state.de,
            para: this.state.para,
            valor: this.state.valor
        }

        this.props.converteMoedas(dado)
    }

    render() {
     return (
        <form className="formBody">
            <div className="topForm">
                <Coins size={25} color="#0d2509" weight="thin" />
                <input 
                onChange={(e) => this.onValueChange(e)}
                type="number" 
                className='valueInsert' 
                name="valor"
                placeholder="Valor para conversão..."/>
            </div>

            <div className='middleForm'>
                <div className="leftForm">
                    <p> De: </p>
                    <ListaMoedas origem="de" onValueChange={this.onValueDeChange} />
                </div>
        
                <div className="rightForm">
                    <p> Para: </p>
                    <ListaMoedas origem="para" onValueChange={this.onValueParaChange} />
                </div>
            </div>

            <button type="button" onClick={this.envia}className="formButton">
                Converter
            </button>
        </form>
     )
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators({converteMoedas}, dispatch)
}



export default connect(null, mapDispatchToProps)(Formulario)