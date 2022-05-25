import { CurrencyCircleDollar } from 'phosphor-react';
import './Conversor.css';

import { connect } from 'react-redux'
import React from 'react';
import Formulario from '../Formulario/Formulario';

const Conversor = props => {

    return (
        <div className="containerConversor">
            <div className="form">
                <div className="formHeader">
                   <CurrencyCircleDollar size={30} color="#e8ffd8" weight="thin" />
                    <h2> do norte corretora </h2> 
                </div>

                <div className="formBody">
                   <Formulario />
                </div>

                <div className="formFooter">
                    <p> Valor convertido: </p>
                    <p className="convertValue"> {props.conversor.quotes && props.conversor.quotes[Object.keys(props.conversor.quotes)[0]].toFixed(2)} </p>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps (state){
    return{conversor: state.conversor}
}


export default connect(mapStateToProps, null)(Conversor)