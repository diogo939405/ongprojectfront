import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import logo from '../Imagens/logo_diogo-removebg-preview.png'
import Row from 'react-bootstrap/Row';

import "./Menu.css"
import 'react-toastify/dist/ReactToastify.css';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import brand from '../Imagens/logo_diogo-removebg-preview.png'

export default function Menu() {

    function notify() {
        toast.info(" Contato Gmail:Diogo.Favilla@gmail.com  Telefone:(21)97360 - 7207")
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"

            />
            <div>
                <header>
                    <Container>
                        <Row>

                            <nav class="navbar navbar-expand-lg navbar-dark">
                                <div class="container">
                                    <a class="navbar-brand" onClick={notify} id='logobrand'>
                                        <img src={logo} alt="Bootstrap" width="30" height="30" />
                                    </a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav ms-auto">
                                            <li class="nav-item me-5" id='menuPalavra'>
                                                {/* active */}
                                                <a class="nav-link " aria-current="page" href="/">Home</a>
                                            </li>
                                            <li class="nav-item me-5" id='menuPalavra'>
                                                <a class="nav-link" href="/Doacao">Doacao</a>
                                            </li>
                                            <li class="nav-item me-5" id='menuPalavra'>
                                                <a class="nav-link" href="/SobreMim">SobreMim</a>
                                            </li>
                                            <li class="nav-item me-5" id='menuPalavra'>
                                                <a class="nav-link" href="/Ongs">Ongs</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="socialIcons">
                                        <a href="https://www.linkedin.com/in/diogo-favilla-g-jacintho-8728041ba/" target="_blank"><i><AiFillLinkedin /></i></a>
                                        <a href="https://github.com/diogo939405" target="_blank"><i><AiFillGithub /></i></a>
                                        <a href="https://www.instagram.com/di_ogo01/" target="_blank"><i><AiFillInstagram /></i></a>
                                    </div>
                                </div>
                            </nav>
                        </Row>
                    </Container>
                </header>
            </div>
        </>
    )
}
