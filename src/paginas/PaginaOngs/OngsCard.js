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
import 'react-toastify/dist/ReactToastify.css';

export default function OngsCard() {

    const [data, setData] = useState([])

    function notify() {
        toast.info("Houve um problema ao carregar a pagina,aguarde um pouco ou aperte F5")
    }

    useEffect(() => {
        axios.get('http://localhost:5000/TodosDados')
            .then((resp) => {
                setData(resp.data)
            })
            .catch((err) => notify())
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
                    {data.map((info) => {

                        return (
                            < Col id='coluna' >
                                <card className='card' key={info._id}  >
                                    <img src={logo} alt='descrição' className='imagem-descricao'></img>
                                    <h3 className='titulo-card'>{info.nome}</h3>
                                    <div className='botoes'>
                                        <button className='btnm' >
                                            <Link className='linkBotao' to={`/OngsDoando/${info._id}`}> Saiba mais</Link>
                                        </button>
                                    </div>

                                </card>

                            </Col>
                        );
                    })}
                </Row>
            </Container >
        </>
    )
}
