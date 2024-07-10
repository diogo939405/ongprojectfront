import React from 'react'
import gerarToken from './Paypal';
import axios from 'axios'
import props from 'prop-types';
import Menu from '../menu/Menu'
import Footer from '../footer/Footer';
import AnimatedPage from '../AnimatedPage';
import './PagamentoTela.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'




export default function PagamentoTela() {
  return (
    <>
      <header className='cabeca'>
        <Menu />
        <div className='div-texto'>
          <div >
            <h4 className='div-titulo'>Pagamento confirmado</h4>
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
        <body className='conte'>
          <section className='t'>
            <Container>
              <Row>
                <Col>
                  <div className='conte-body'>
                    <div className='conte-texto1'>Obrigado por ter doado</div>
                    <div className='conte-buttons'>
                      <button className='conte-buttonOnly'><a href='/SobreMim'>SobreMim</a></button>
                      <button className='conte-buttonOnly'> <a href='/'>Voltar ao Home</a> </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </body>
      </AnimatedPage>
      <footer className='rodape-doandoo'>
        <Footer />
      </footer>
    </>

  )
}
