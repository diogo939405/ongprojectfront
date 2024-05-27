import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import "./Menu.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Imagens/logo_diogo-removebg-preview.png'

export default function Menu() {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            <img src={logo} alt="Bootstrap" width="30" height="30" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item me-5">
                                    {/* active */}
                                    <a class="nav-link  " aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item me-5">
                                    <a class="nav-link" href="/Doacao">Doacao</a>
                                </li>
                                <li class="nav-item me-5">
                                    <a class="nav-link" href="/SobreMim">SobreMim</a>
                                </li>
                                <li class="nav-item me-5">
                                    <a class="nav-link" href="/Ongs">Ongs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>















            {/* <div className='row rowcor'>
                    <div className='col-lg-4'>
                        <Navbar expand="lg" className="navbar" bg="ligth" id='barra' >
                            <Container>
                                <Navbar.Brand href="#home" id='foto'>
                                    <img
                                        id='foto-foto'
                                        alt=""
                                        src={logo}
                                        width="50"
                                        height="50"
                                        className="d-inline-block align-top text-danger "
                                    />{' '}

                                </Navbar.Brand>
                            </Container>

                        </Navbar>
                    </div>
                    <div className='col-lg-4'>
                        <Navbar expand="lg" className="">
                            <Container>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto" id='corpo-link'>
                                        <Nav.Link href="/" id='nav-link' smooth>Home</Nav.Link>
                                        <Nav.Link href="/Doacao" id='nav-link' smooth>Link</Nav.Link>
                                        <Nav.Link href="/Ongs" id='nav-link' smooth>Doe</Nav.Link>
                                        <Nav.Link href="/SobreMim" id='nav-link' smooth>Sobre Mim</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        <div className='col-lg-4'>


                        </div>


                    </div>
                </div>
                <Outlet /> */}

        </div>
    )
}
