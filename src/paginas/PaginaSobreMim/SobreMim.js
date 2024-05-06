import React from 'react'
import axios from 'axios'
import Menu from '../../menu/Menu';
import { Outlet } from 'react-router'
import AnimatedPage from '../../AnimatedPage'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../footer/Footer';
import './SobreMim.css'
import gerarToken from '../../pagamento/Paypal'
import PagamentoTela from '../../pagamento/PagamentoTela';

export default function SobreMim() {
  return (
    <AnimatedPage>
      <header className='cabeca'>
        <Menu />
        <div className='div-texto'>
          <div >
            <h4 className='div-titulo'>titulo pagina</h4>
          </div>
          <div className='div-info'>
            <span>
              <a href='/' className='link-home'> Home</a>
            </span>
            <span style={{ color: 'white', fontSize: '1.3rem' }}>/</span>
            <span className='pagina-atual'>SobreMim</span>
            <span></span>
          </div>
        </div>
      </header>

      <section className='introducao'>
        <Container id='corpo'>
          <Row id='linha'>
            <Col id='coluna-texto'>
              <h4 className='titulo-about'> Titulo</h4>
              <p className='texto-about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className='botoes-about'>
                <button className='botao-about'> botão aqui</button>
              </div>
              <div className='icon-about'>
                {/* <FaLinkedin /> */}
                <h4>Redes sociais aqui</h4>
              </div>
            </Col>

            <Col id='coluna-imagem'>
              {/* <Image src={}></Image> */}
              <h5>Diogo imagem</h5>

            </Col>
          </Row>
        </Container>
      </section>
      <section className='descricao'>
      </section>
      <footer>
        <Footer />
      </footer>
      <Outlet />
    </AnimatedPage>
  )
}
