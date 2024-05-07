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
import logo1 from '../PaginaDoação/Icons/information.png';
import eu from '../../Imagens/diogo.jpg'

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

      <section className='descricao'>
        <Container id='descrição-corpo'>
          <Row id='descrição-linha'>
            <Col id='descrição-coluna1'>
              <div className='descrição-imagem'>
                <img className='imagem-minha' src={eu} height='450px' width='490px'></img>
              </div>
            </Col>
            <Col id='descrição-coluna2'>
              <div className='colTexto'>
                <p className='textoLinha'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div>

        </div>

      </section>

      <section className='introducao'>
        <Container id='container-icons'>
          <Row id='corpo-icons' className='gx-5'>
            <Col id='icons'>
              <div className='mensagem-icons'>
                <div className='imagem-icons'>
                  <img src={logo1} height='95px' width='100px' alt='oie' />
                </div>
                <h4 className='icon-descrição'>Titulo</h4>
                <p className='texto-icon-sobre'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </Col>
            <Col id='icons'>
              <div className='mensagem-icons'>
                <div className='imagem-icons'>
                  <img src={logo1} height='95px' width='100px' alt='oie' />
                </div>
                <h4 className='icon-descrição'>Titulo</h4>
                <p className='texto-icon-sobre'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </Col>
            <Col id='icons'>
              <div className='mensagem-icons'>
                <div className='imagem-icons'>
                  <img src={logo1} height='95px' width='100px' alt='oie' />
                </div>
                <h4 className='icon-descrição'>Titulo</h4>
                <p className='texto-icon-sobre'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </Col>
          </Row>
        </Container>














        {/* <Container id='corpo'>
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

                <h4>Redes sociais aqui</h4>
              </div>
            </Col>

            <Col id='coluna-imagem'>
              <h5>Diogo imagem</h5>

            </Col>
          </Row>
        </Container> */}
      </section>
      <section className='final'>
        <Container>
          <Row>
            <Col>
              <div className='linha-historia'>
               </div>
            </Col>
            <Col>
              <div className='formulario'>




              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer>
        <Footer />
      </footer>
      <Outlet />
    </AnimatedPage>
  )
}
