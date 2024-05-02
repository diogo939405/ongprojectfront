import React, { useState } from 'react'
import AnimatedPage from '../../AnimatedPage'
import { Outlet } from 'react-router'
import logo from '../../Imagens/_A smile is the universal welcome__.jpg'
import './Ongs.css'
import ReactCardFlip from 'react-card-flip'
import OngsCard from './OngsCard'
import Menu from '../../menu/Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from '../../Imagens/logo_diogo-removebg-preview.png';
import Footer from '../../footer/Footer'



export default function Ongs() {

  const [isfliped, setIsFliped] = useState(false)

  function Fliped() {
    setIsFliped(!isfliped)
  }

  return (
    <AnimatedPage>
     <header className='cabeca'>
        <Menu/>
        <div className='div-texto'>
          <div >
            <h4 className='div-titulo'>titulo pagina</h4>
          </div>
          <div className='div-info'>
            <span>
              <a href='/' className='link-home'> Home</a>
            </span>
            <span style={{ color: 'white', fontSize: '1.3rem' }}>/</span>
            <span className='pagina-atual'>Ongs</span>
            <span></span>
          </div>
        </div>
      </header>
      <section className='secao-body'>
      <div className='secao-cards'>
        <OngsCard/>
      </div>  
      </section>
    
      <footer>
        <Footer/>
      </footer>

      <Outlet />
    </AnimatedPage>


  )
}
