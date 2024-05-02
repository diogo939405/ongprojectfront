import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import './Footer.css'
import brand from '../Imagens/logo_diogo-removebg-preview.png'

export default function Footer() {
    return (
        <Container>
            <Row>

                <footer>
                    <div class="footerContainer">
                        
                        <div class="footerNav">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/Doacao">News</a></li>
                                <li><a href="/SobreMim">About</a></li>
                                <li><a href="/Ongs">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="socialIcons">
                            <a class="navbar-brand" href="https://diogo-portfolioo.netlify.app/">
                                <img src={brand} alt="Bootstrap" width="30" height="30" className='logo-image' />
                            </a>
                            <a href="https://www.instagram.com/di_ogo01/"><i><AiFillLinkedin /></i></a>
                            <a href="https://github.com/"><i><AiFillGithub /></i></a>
                            <a href="https://www.linkedin.com/in/diogo-favilla-g-jacintho-8728041ba/"><i><AiFillInstagram /></i></a>
                        </div>


                    </div>
                    {/* <div class="footerBottom">
                        <p>Copyright &copy;2023; Designed by <span class="designer">Noman</span></p>
                    </div> */}
                </footer>

            </Row>
        </Container>

    )
}