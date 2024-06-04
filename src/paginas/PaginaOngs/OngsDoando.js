import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'
import gerarToken from '../../pagamento/Paypal';
import Loading from '../../loading/Loading';
import PagamentoTela from '../../pagamento/PagamentoTela';
import BotaoPagamento from './BotãoPagamento';
import SlideGallery from './SlideGallery';
import './OngsDoando.css'

export default function OngsDoando() {

    const { infoId } = useParams()
    const [infoDetails, setInfoDetails] = useState({})
    const [products, setProducts] = useState({})
    const [inputValue, setInputValue] = useState()
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    let dadospgto;
    var token = '';
    let param = ''
    let doar = document.getElementById("doar");//.target.value
    // let dado2 = document.getElementById("doar").target.value
    let botaoDoar = document.getElementById('botao-doar')

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        axios.get(`http://localhost:5000/TodosDados/${infoId}`)
            .then((resp) => {
                setInfoDetails(resp.data)
                console.log('dados do card', resp.data, infoDetails)
                setProducts({
                    description: `${infoDetails.Nome}`,
                    price: inputValue,
                })
                console.log('dados do card', resp.data, infoDetails)
            })
    }, [infoId]);

    const beforeSend = (valor) => {
        const valorNovo = Number(valor.target.value)
        setInputValue(valorNovo)
        console.log('objeto em input ', products)
    }

    // function onlyNumbers(t) {
    //     var nu = t.which || t.keycode;
    //     if ((nu >= 48 && nu <= 57)) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

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
                        <span className='pagina-atual'>
                            <a href='/Ongs' className='link-home'>Ongs</a>
                        </span>
                        <span className='pagina-atual'>{infoDetails.Nome}</span>
                        <span></span>
                    </div>
                </div>
            </header>

            <section className='corpo-ong'>
                <Container>
                    <Row>
                        <Col>
                            <div className='ongs-texto'>
                                <div className='ongs-texto-conjunto'>
                                    <h2 className='ongs-texto-titulo'>
                                        {infoDetails.Nome}
                                    </h2>
                                    {/* <hr className='barra'/> */}
                                </div>
                                <p className='ongs-texto-textos'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            </div>
                            {/* <div className='dados'>
                                <p className='dados-titulo'>Dados para compra</p>
                                <p> Login:weifweogrw</p>
                                <p> Senha:wnfwngjrwngrjnh</p>

                            </div> */}
                        </Col>
                        <Col>
                            <div className='ongs-imagens'>

                                <div className='ong-wrapper'>
                                    <form className='form-do' >
                                        <div className='form-titu'>
                                            <h2> Formulário de doação</h2>
                                        </div>
                                        <br />
                                        <div className='input-box' >
                                            <label className='label-for'>Nome</label>
                                            <input type='text' placeholder='digite seu Nome(Opcional)' />
                                        </div>

                                        <div className='input-box'>
                                            <label className='label-for'>Gmail</label>
                                            <input type='text' placeholder='digite sua email(Opcional)'
                                            // defaultValue="@gmail.com"
                                            />
                                        </div>

                                        <div className='input-box'>
                                            <label className='label-for'>Valor a ser Doado</label>
                                            <input type='text' id='doar' placeholder='Faça sua doação' value={inputValue} onChange={beforeSend} ></input>
                                        </div>
                                        <div className='paypal-button-container'>
                                            <BotaoPagamento product={infoDetails} price={inputValue} doar={doar} />
                                        </div>

                                        {/* <button id='botao-doar'> Doar </button> */}
                                        {/* onClick={(x) => tratarPagamento(x)} */}
                                    </form>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='ongs-form '>
                <SlideGallery />

            </section>

            {/* <h4>{infoDetails.Nome}</h4>
                <input type='text' className='input-doar' id='doar'placeholder='Faça sua doação' value={inputValue} onChange={inputChange} onKeyDown={(y) => onlyNumbers(y)}></input>
                <button onClick={(x) => tratarPagamento(x)} id='botao-doar'> AQUI </button> */}


            {loadingSpinner ? <Loading /> : null
            }
            <footer className='rodape-doando' >
                <Footer />
            </footer>
        </>


    )
}

