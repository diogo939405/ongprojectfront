import React, { useState } from 'react'
import { Outlet } from 'react-router'
import "./Principal.css"
import Menu from '../../menu/Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../footer/Footer'
import imagemCard from '../../Imagens/download (2).jpg'





export default function Principal() {

  let data = [
    {
      id: 1,
      imgSrc: imagemCard,
      tex: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry1111'
    },
    {
      id: 2,
      imgSrc: imagemCard,
      tex: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry2222'
    },
    {
      id: 3,
      imgSrc: imagemCard,
      tex: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry3333'
    },
    {
      id: 4,
      imgSrc: imagemCard,
      tex: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry4444'
    }
  ]

  const [file, setFile] = useState(-1);

  const handleClick = (index) => {
    setFile(index)
  }

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
                  <h1 className='principal-titulo' >Titulo</h1>
                  <p className='principal-descricao' >
                    {file !== -1 ? data[file].tex : "nfuhurshurihiuvif"}
                  </p>
                </div>
              </Col>

              <Col className='sm={6}'>

                <div className='cards-col'>
                  {
                    data.map((x, index) => {
                      return (
                        <div className='cardss' >
                          <img src={x.imgSrc} className='imagemdoCard' key={index} onClick={() => handleClick(index)} />
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