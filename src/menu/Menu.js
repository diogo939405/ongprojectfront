import React, { useState } from 'react'
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
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import brand from '../Imagens/logo_diogo-removebg-preview.png'

export default function Menu() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

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
                    <nav className="nav">
                        <a class="navbar-brand" title='Contato' onClick={notify} id='logobrand'>
                            <img src={logo} alt="Bootstrap" width="30" height="30" />
                        </a>
                        <ul className={active}>
                            <li className="nav__item">
                                <a href="/" className="nav__link">
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="/Doacao" className="nav__link">
                                    A importância de Doar
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="/SobreMim" className="nav__link">
                                    Sobre mim
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="/Ongs" className="nav__link">
                                    Doe
                                </a>
                            </li>
                        </ul>
                        <div onClick={navToggle} className={icon}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <div class="socialIcons">
                            <a href="https://www.linkedin.com/in/diogo-favilla-g-jacintho-8728041ba/" title='Linkedin' target="_blank"><i><AiFillLinkedin /></i></a>
                            <a href="https://github.com/diogo939405" target="_blank" title='Github'><i><AiFillGithub /></i></a>
                            <a href="https://diogo-portfolioo.netlify.app/" target="_blank" title='Meu Portfólio'><i><HiOutlineComputerDesktop /></i></a>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}
