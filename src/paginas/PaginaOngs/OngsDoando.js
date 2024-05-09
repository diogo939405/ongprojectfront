import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'
import gerarToken from '../../pagamento/Paypal';
import Loading from '../../loading/Loading';
import PagamentoTela from '../../pagamento/PagamentoTela';
import './OngsDoando.css'

export default function OngsDoando() {

    const { infoId } = useParams()
    const [infoDetails, setInfoDetails] = useState({})
    const [inputValue, setInputValue] = useState()
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    let dadospgto;
    var token = '';
    let param = ''
    let dado = document.getElementById("doar")
    let botaoDoar = document.getElementById('botao-doar')

    useEffect(() => {
        axios.get(`http://localhost:5000/TodosDados/${infoId}`)
            .then((resp) => {
                setInfoDetails(resp.data)
            })
    }, [infoId]);

    const inputChange = (valor) => {
        const valorNovo = Number(valor.target.value)
        setInputValue(valorNovo)
    }

    async function tratarPagamento(k) {
        console.log('valor recebido', inputValue)
        // valorDado = dado.value
        setLoadingSpinner(true)
        token = await gerarToken();
        await efetuarPagamento(token)
            .then(async result => {
                try {
                    const url = result
                    window.open(`${url}`)
                } catch (error) {
                    console.log('erro no redirect', error)
                }
                setLoadingSpinner(false)
            });
        console.log('exibir pagamento')
    }

    let _data = {
        id: ``,
        cardId: `${infoDetails._id}`,
        valor: `${inputValue}`,
    }


    fetch("http://localhost:5000/compra", {
        method: "POST",
        body: JSON.stringify(_data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    async function efetuarPagamento(token) {
        console.log('efetuando pagamento')
        const tokenAcess = await token
        const response = await axios({
            url: process.env.REACT_APP_PAYPAL_BASE_URL + '/v2/checkout/orders',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenAcess
            },
            data: JSON.stringify({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        items: [
                            {
                                name: `${infoDetails.Nome}`,
                                description: ' 1 teste de compra',
                                quantity: '1',
                                unit_amount: {
                                    currency_code: "BRL",
                                    value: `${inputValue}`
                                }
                            }
                        ],

                        amount: {
                            currency_code: "BRL",
                            value: `${inputValue}`,
                            breakdown: {
                                item_total: {
                                    currency_code: 'BRL',
                                    value: `${inputValue}`
                                }
                            }
                        }
                    }
                ],

                application_context: {
                    return_url: 'http://g1.com.br', //`http://localhost:3000/PagamentoTela?token=${token}&orderId=${response.data.id}`,
                    cancel_url: 'https://ge.globo.com/futebol/times/sao-paulo/',
                    shipping_preference: "NO_SHIPPING",
                    brand_name: 'nome da ong'
                }

            })
        })
        console.log('dados da comora', response.data)
        if (response.data.status == 'CREATED')
            dadospgto = response.data;
        // pegardados(response.data)
        return response.data.links.find(link => link.rel === 'approve').href

    }

    function onlyNumbers(t) {
        var nu = t.which || t.keycode;
        if ((nu >= 48 && nu < 57)) {
            return true
        } else {
            return false
        }
    }

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
                            {/* <div>
                                <button className="btn btn-three">oie</button>
                            </div> */}
                        </Col>
                        <Col>
                            <div className='ongs-imagens'>

                                <div className='ong-wrapper'>
                                    <form >
                                        <div className='form-titu'>
                                            <h2> Formulário de doação</h2>
                                        </div>
                                        <br />
                                        <div className='input-box' >
                                            <input type='text' placeholder='digite seu Nome' required />
                                        </div>

                                        <div className='input-box'>
                                            <input type='text' placeholder='digite sua email' required />
                                        </div>

                                        <div className='input-box'>
                                            <input type='text' id='doar' placeholder='Faça sua doação' value={inputValue} onChange={inputChange} onKeyDown={(y) => onlyNumbers(y)}></input>
                                        </div>
                                        <button onClick={(x) => tratarPagamento(x)} id='botao-doar'> Doar </button>

                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='ongs-form '>

                <div className='ong-wrapper'>
                    <form >
                        <div className='form-titu'>
                            <h2> Titulo</h2>
                        </div>
                        <br />
                        <div className='input-box' >
                            <input type='text' placeholder='digite seu Nome' required />
                        </div>

                        <div className='input-box'>
                            <input type='text' placeholder='digite sua email' required />
                        </div>

                        <div className='input-box'>
                            <input type='text' id='doar' placeholder='Digite o valor da sua Doação' value={inputValue} onChange={inputChange} onKeyDown={(y) => onlyNumbers(y)}></input>
                        </div>
                        <button onClick={(x) => tratarPagamento(x)} id='botao-doar'> AQUI </button>

                    </form>
                </div>

                {/* className='wrapper d-flex align-items-center justify-content-center' */}

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

