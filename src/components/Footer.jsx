import React from 'react';

import ReDragon from '../images/redragon.png'

import '../styles/footer.scss'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <img src={ReDragon} alt="" />
                <span>REDRAGON BRASIL</span>
            </div>
        </>
    )
}