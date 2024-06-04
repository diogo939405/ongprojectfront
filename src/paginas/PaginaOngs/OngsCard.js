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

export default function OngsCard() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/TodosDados')
            .then((resp) => {
                setData(resp.data)
            })
            .catch((err) => console.log(err))
    }, []);


    function datPass(id) {
        console.log('item clicado', id)

    }

    return (
        <><Outlet />
            <Container>
                <Row id='linha'>
                    {data.map((info) => {

                        return (
                            < Col id='coluna' >
                                <card className='card' key={info._id}  >
                                    <img src={logo} alt='descrição' className='imagem-descricao'></img>
                                    <h3 className='titulo-card'>{info.Nome}</h3>
                                    <div className='botoes'>
                                        <button className='btnm' onClick={() => datPass(info._id)}>
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
