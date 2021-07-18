import React from 'react';

import ReDragon from '../images/redragon.png'

import '../styles/header.scss';

export default function Header(){
    return(
        <>
            <div className="header">
            <img src={ReDragon} alt="" />
                <span>Início</span>
                <span>Sobre</span>
                <span>Produtos</span>
                <span>Contato</span>
            </div>
        </>
    )
}