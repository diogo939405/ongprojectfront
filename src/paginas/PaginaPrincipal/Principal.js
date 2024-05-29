import React, { useState } from 'react'
import { Outlet } from 'react-router'
import AnimatedPage from '../../AnimatedPage'
import logo from '../../Imagens/logo_diogo-removebg-preview.png'
import "./Principal.css"
import Menu from '../../menu/Menu'
import { Media } from './media'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../../footer/Footer'
import imagemCard from '../../Imagens/download (2).jpg'





export default function Principal() {

  let data = [
    {
      id: 1,
      imgSrc: imagemCard
    },
    {
      id: 2,
      imgSrc: imagemCard
    },
    {
      id: 3,
      imgSrc: imagemCard
    },
    {
      id: 4,
      imgSrc: imagemCard
    }
  ]

  const [file, setFile] = useState(null)

  return (
    <>
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
                  {
                    data.map((x, index) => {
                      return (
                        <div className='cardss' key={index} onClick={() => setFile(file)}>
                          <img src={x.imgSrc} className='imagemdoCard' />
                        </div>
                      )
                    })
                  }
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
    </>
  )
}