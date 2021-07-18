import React, { useState } from 'react'

import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'


import Cobra from './images/cobra.png'
import Siren from './images/headset-redragon-siren.png'
import Kumara from './images/kumara.png'
import BlackFriday from './images/black-friday2.png'
import TicketBlackFriday from './images/black-friday-ticket.png'
import BottomArrow from './images/arrow.png';
import './styles/app.scss'


function App() {

  const [email, setEmail] = useState('');

  function registerEmail() {
    localStorage.setItem('Email', JSON.stringify(email))
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <div className="products">
        <Card discount={50} img={Cobra} description='Mouse Gamer Redragon Cobra, 10000DPI, Chroma, Preto - M711' quantity={68} />
        <Card discount={30} img={Siren} description='Headset Redragon Siren H301 ' quantity={22} />
        <Card discount={40} img={Kumara} description='Teclado Mecânico Redragon Kumara RGB, Switch Black, ABNT2' quantity={57} />
      </div>
      <img id="arrow" src={BottomArrow} alt="seta" />

      <div id="content">
        <aside>
          <img src={BlackFriday} alt="imagem de black friday" />
        </aside>
        <main>
          <div className="register">
            <span>Receba novidades e promoções dos produtos por email</span>
            <img src={TicketBlackFriday} alt="imagem de black friday" />
            <form>
              <input type="text" placeholder="Digite seu email" value={email} onChange={e => setEmail(e.target.value)} />
              <button type="button" onClick={registerEmail}>Cadastrar</button>
            </form>
          </div>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
