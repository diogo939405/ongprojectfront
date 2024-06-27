import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'
import Loading from '../../loading/Loading';
import PagamentoTela from '../../pagamento/PagamentoTela';
import BotaoPagamento from './BotãoPagamento';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SlideGallery from './SlideGallery';
import './OngsDoando.css'



export default function OngsDoando() {
    initMercadoPago('TEST-00a38ea9-801e-48c5-9c93-a252d6ac8884', {
        locale: "pt-BR",
    });
    const [idCompra, setIdCompra] = useState(null)
    const textToCopy = '5031 4332 1540 6351';
    const [copiado, setCopiado] = useState(false)
  
    const { infoId } = useParams()
    const [infoDetails, setInfoDetails] = useState({})
    const [products, setProducts] = useState({})
    const [inputValue, setInputValue] = useState()
    const [inputName, setInputName] = useState()
    const [loadingSpinner, setLoadingSpinner] = useState(false)


    const apiPagamento = process.env.REACT_APP_BASE_URL_PAGAMENTO

    const apiData = process.env.REACT_APP_BASE_URL_DADOS
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        axios.get(`${apiData}TodosDados/${infoId}`)
            .then((resp) => {
                setInfoDetails(resp.data)
                console.log('dados do card', resp.data, infoDetails)
                // setProducts({
                //     description: `${infoDetails.descricaoCurta}`,

                //     price: inputValue,
                // })
                console.log('dados do card', resp.data, infoDetails)
            })
    }, [infoId]);

  
    const comprar = async (dados) => {
        try {

            const response = await axios.post(`${apiPagamento}dados`
                // 'http://localhost:4000/dados'
            , {
                title: inputName,
                unit_price: inputValue,
                currency_id: "BRL",
                description: infoDetails.descricaoCurta,
                quantity: 1
            }).then((v) => {
                console.log('RETORNO DA API', v)
                window.open(v.data.url, "_blank")
            })
            const { id } = response.data
            return id
        } catch (error) {
            console.log(error)
        }
    }

    const gerirCompra = async () => {
        const id = await comprar()
        if (id) {
            setIdCompra(id);
        }
    };

    const nomeEscrito = (nome) => {
        const nomeNovo = nome.target.value
        setInputName(nomeNovo)
        // console.log(nomeNovo)
    }

    const beforeSend = (valor) => {
        const valorNovo = Number(valor.target.value.replace(/[^0-9]/g, ''))
        setInputValue(valorNovo)
        console.log('objeto em input ', valorNovo)
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000); // Esconde a mensagem após 2 segundos
        } catch (error) {
            console.error('Falha ao copiar o texto:', error);
        }
    };
    return (
        <>


            <header className='cabeca'>
                <Menu />
                <div className='div-texto'>
                    <div >
                        <h4 className='div-titulo'>{infoDetails.nome}</h4>
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
                                        {infoDetails.descricaoCurta}
                                    </h2>
                                </div>
                                <p className='ongs-texto-textos'>{infoDetails.descricaoLonga}
                                    <span><a href={infoDetails.link} target="_blank" className='link-projeto'>Saiba mais sobre o projeto</a></span>
                                    <br />
                                    <br />
                                    <span className='cartaoDados'>Dados Fictícios para realizar a doação</span>
                                    <br />
                                    <span className='cartaoDados'>Numero do cartão: 5031 4332 1540 6351
                                        <button onClick={copyToClipboard}>Copiar</button>
                                        {copiado && <span className='copy-return'>Texto copiado!</span>}
                                    </span>
                                    <br />
                                    <span className='cartaoDados'>CVV:123</span>
                                    <br />
                                    <span className='cartaoDados'>Validade:11/25</span>
                                    <br />
                                    <span className='cartaoDados'>CPF:12345678909</span>
                                    <br/>
                                    <span className='cartaoDados'>Caso não abra um nova guia ao clicar no botão doar,verifique se o seu browser esta com "pop-up" bloqueado</span>
                                </p>

                            </div>
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
                                            <input type='text' value={inputName} onChange={nomeEscrito} placeholder='digite seu Nome' />
                                        </div>

                                        <div className='input-box'>
                                            <label className='label-for'>Gmail</label>
                                            <input type='text' placeholder='digite sua email(Opcional)'
                                            />
                                        </div>
                                        <div className='input-box'>
                                            <label className='label-for'>Valor a ser Doado</label>
                                            <CurrencyInput
                                                id="input-example"
                                                name="input-name"
                                                placeholder="digite um valor"
                                                value={inputValue}
                                                defaultValue={0}
                                                prefix={'R$'}
                                                onChange={beforeSend}
                                                drecimalsLimit={8}
                                                onValueChange={(value, name, values) => console.log(value, name, values)}
                                            />;
                                        </div>
                                    </form>
                                    <div>
                                        <button onClick={gerirCompra} className='confirma-compra'>Doar</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='ongs-form '>
                <SlideGallery />

            </section>

            {loadingSpinner ? <Loading /> : null
            }
            <footer className='rodape-doando' >
                <Footer />
            </footer>
        </>


    )
}

