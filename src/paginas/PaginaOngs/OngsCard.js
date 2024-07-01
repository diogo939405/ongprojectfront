import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip'
import './OngsCard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../Imagens/_A smile is the universal welcome__.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

export default function OngsCard() {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const apiDados = process.env.REACT_APP_BASE_URL_DADOS

    function notify() {
        toast.info("Houve um problema ao carregar a pagina,aguarde um pouco ou aperte F5")
    }

    function notifyAtraso() {
        toast.info("Os dados podem demorar um pouco para aparecer na primeiro carregamento da página, aguarde um pouco ou recarregue a página")
    }

    useEffect(() => {
        const fetchData = async () => {
            notifyAtraso()
            try {
                const resp = await axios.get(`${apiDados}TodosDados`)

                setData(resp.data)
            }
            catch (err) {
                notify()
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()
    }, []);




    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={7000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <Outlet />
            <Container>
                <Row id='linha'>

                    {loading ? (
                        <Loading />
                    ) : (
                        data.map(info => (


                            <Col id='coluna' >
                                <card className='card' key={info._id}  >
                                    <img src={info.foto} alt='descrição' className='imagem-descricao'></img>
                                    <h3 className='titulo-card'>{info.nome}</h3>
                                    <div className='botoes'>
                                        <button className='btnm' >
                                            <Link className='linkBotao' to={`/OngsDoando/${info._id}`}> Saiba mais</Link>
                                        </button>
                                    </div>
                                </card>
                            </Col>
                        )))
                    }
                </Row>
            </Container >
        </>
    )
}
