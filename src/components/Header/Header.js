import React from 'react';
import './header.css'
import { Bank } from 'phosphor-react';

export const Header = props => {
    return (
        <div className="container-header"> 
            <Bank size={56} color="#e8ffd8" weight="duotone" className='headerIcon' />
            <h1 className="title"> Conversor de Moedas </h1>
        </div>
    )
}
