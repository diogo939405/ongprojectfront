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
import Form from './Form'
import logo1 from '../../assets/icons/information (1).png';
import eu from '../../assets/WhatsApp Image 2024-06-17 at 16.51.29.jpeg';
import Float from '../../floatButton/Float';



export default function SobreMim() {


  return (
    <>

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
      <AnimatedPage>
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
                    Olá me chamo Diogo Favilla Gonçalves Jacintho tenho 23 anos e esse é meu site de Doações 100% feito por mim.
                    Sou formado em análise e desenvolvimento de sistemas e em lingua inglesa pelo Brasas English Course(nível C2),já trabalhei como estágiario na área de programação
                    e em diversos projetos como freelancer além de outros que fiz para aprendizado, Dentre os projetos posso destacar um sistema CRUD com integração ao banco de dados de um
                    site do wordpress, meu portfólio e um aplicativo em flutter. Possuo conhecimento em  Javascript,React.js,Angular,MongoDb,Postman,Next.js,Pyton,Typescript,Redux,Boostrap
                    Node.js,conceitos de Ui/Ux e entre outros conhecimentos; aliando se a isso Prezo sempre por sistemas polidos e bem organizados em que as partes presentes conversem entre si,procuro sempre inserir  um design moderno e atrativo nos meus projetos, afinal de tudo a primeira impressão é a que fica.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div>

          </div>

        </section>

        <section className='final'>
          <Container>
            <Row>
              <Col>
                <div className='linha-historia'>
                  <div className='linha-titulo'>
                    <h1 className='titulo-linha'>historia</h1>
                    <p> um pouco mais sobre minha trajetória</p>
                  </div>
                  <div className='linha-tempo'>
                    <div className='linha-etapas'>
                      <div>
                        <h2 className='titulo-etapa'> parte 7</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                    </div>
                    <div className='linha-etapas'>
                      <div>
                        <h2 className='titulo-etapa'> parte 6</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                    </div>
                    <div className='linha-etapas'>
                      <div>
                        <h2 className='titulo-etapa'> parte 5</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                    </div>
                    <div className='linha-etapas'>
                      <div>
                        <h2 className='titulo-etapa'> parte 4</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                    </div>
                    <div className='linha-etapas'>
                      <div>
                        <h2 className='titulo-etapa'> parte 3</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                    </div>
                    <div className='linha-etapas'>
                      <div>
                        <h2 className='titulo-etapa'> parte 2</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                    </div>
                    <div className='linha-etapas'>
                      <div>
                        <h2 className='titulo-etapa'> parte 1</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='introducao'>
          <Container id='container-icons'>
            <Row id='corpo-icons' className='gx-5'>
              <Col id='icons'>
                <div className='mensagem-icons'>
                  <div className='imagem-icons'>
                    <img src={logo1} height='95px' width='100px' alt='oie' />
                  </div>
                  <h4 className='icon-descrição'></h4>
                  <p className='texto-icon-sobre'>Preencha o formulário ao lado para enviar uma mensagem ao criador do site, a mensagem será enviada por gmail.</p>
                </div>
              </Col>
              <Col>
                <div className='ongs-imagens'>
                  <Form />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AnimatedPage>

      <footer className='under'>
        <Footer />
      </footer>
      <Float />
      <Outlet />
    </>
  )
}
