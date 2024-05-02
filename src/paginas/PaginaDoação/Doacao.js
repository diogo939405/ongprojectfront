import React, { useRef } from 'react'
import { Outlet } from 'react-router'
import AnimatedPage from '../../AnimatedPage'
import Menu from '../../menu/Menu'
import './Doacao.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import foto from '../../Imagens/Gift Catalog.jpg'
import Button from 'react-bootstrap/Button';
import logo1 from './Icons/information.png'
import logo from '../../Imagens/logo_diogo-removebg-preview.png';
import Footer from '../../footer/Footer'



export default function Doacao() {
  const dados = useRef(null)

  const scrollToDados = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
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
            <span className='pagina-atual'>Doação</span>
            <span></span>
          </div>
        </div>


      </header>
      <body className='corpo'>

        <section className='secao1'>

          <Container>
            <Row id='corpo-mensagem'>
              <Col id='mensagem-imagem'>
                <Image src={foto} id='foto-texto' />
              </Col>

              <Col className='mensagem-texto'>
                <h4 id='titulo'>Titulo</h4>
                {/* <h5 id='subtitulo'>subtitulo</h5> */}
                <p id='conteudo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
            </Row>
            <div className='seta'>
              <Button id='botao-seta' onClick={() => scrollToDados(dados)} behavior="smooth"> AQUI</Button>
            </div>


          </Container>
        </section>


        <section ref={dados} className='secao2'>
          <Container id='container-icons'>
            <Row id='corpo-icons' className='gx-5'>
              <Col id='icons'>
                <div className='mensagem-icons'>
                  <div className='imagem-icons'>
                    <img src={logo1} height='95px' width='100px' alt='oie' />
                  </div>
                  <p className='texto-icon'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </Col>
              <Col id='icons'>
                <div className='mensagem-icons'>
                  <div className='imagem-icons'>
                    <img src={logo1} height='95px' width='100px' alt='oie' />
                  </div>
                  <p className='texto-icon'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </Col>
              <Col id='icons'>
                <div className='mensagem-icons'>
                  <div className='imagem-icons'>
                    <img src={logo1} height='95px' width='100px' alt='oie' />
                  </div>
                  <p className='texto-icon'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </Col>
            </Row>
            <Row id='corpo-icons' className='gx-5'>
              <Col id='icons'>
                <div className='mensagem-icons'>
                  <div className='imagem-icons'>
                    <img src={logo1} height='95px' width='100px' alt='oie' />
                  </div>
                  <p className='texto-icon'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </Col>
              <Col id='icons'>
                <div className='mensagem-icons'>
                  <div className='imagem-icons'>
                    <img src={logo1} height='95px' width='100px' alt='oie' />
                  </div>
                  <p className='texto-icon'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </Col>
              <Col id='icons'>
                <div className='mensagem-icons'>
                  <div className='imagem-icons'>
                    <img src={logo1} height='95px' width='100px' alt='oie' />
                  </div>
                  <p className='texto-icon'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </body>
      <footer className='rodape-doacao'>
        <Footer/>
      </footer>


      

    </AnimatedPage>
  )
}