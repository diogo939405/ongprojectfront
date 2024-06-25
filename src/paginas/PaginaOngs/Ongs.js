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
import Float from '../../floatButton/Float'


export default function Ongs() {
  return (
    <>
      <Menu />
      <header className='cabecaOng'>

        <div className='div-texto'>
          <div >
            <h4 className='div-titulo'>Doe</h4>
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
      <AnimatedPage>
        <section className='secao-body'>
          <div className='secao-cards'>
            <OngsCard />
          </div>
        </section>
      </AnimatedPage>
      <footer>
        <Footer />
      </footer>
      <Float />
      <Outlet />

    </>

  )
}
