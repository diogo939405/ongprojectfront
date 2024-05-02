import React from 'react'
import { Outlet } from 'react-router'
import AnimatedPage from '../../AnimatedPage'
import logo from '../../Imagens/logo_diogo-removebg-preview.png'
import "./Principal.css"
import Menu from '../../menu/Menu'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../../footer/Footer'





export default function Principal() {
  return (

    <AnimatedPage>
      <div className='abc'>
        <header>

        </header>
        <main className='man'>
          <div>
            <Menu />
          </div>
          <Container>
            <Row id='principal-row'>
              <Col className='sm={6}'>
                <div className='principal-texto'>
                  <h1 className='principal-titulo'>Titulo</h1>
                  <p className='principal-descricao'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </Col>
              <Col className='sm={6}'>
                <div className='cards-col'>
                  <div className='cardss'>
                    <h5>titulo</h5>
                    <p>pequena descricao</p>
                  </div>
                  <div className='cardss'>
                    <h5>titulo</h5>
                    <p>pequena descricao</p>
                  </div>

                  <div className='cardss'>
                    <h5>titulo</h5>
                    <p>pequena descricao</p>
                  </div>

                  <div className='cardss'>
                    <h5>titulo</h5>
                    <p>pequena descricao</p>
                  </div>


                </div>
              </Col>

            </Row>
          </Container>
        </main>

        <footer className='rodape-principal'>
          <Footer />
        </footer>
      </div>
      <Outlet />
    </AnimatedPage>
  )
}