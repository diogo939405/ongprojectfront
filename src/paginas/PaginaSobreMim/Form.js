import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'

export default function Form() {
    const form = useRef();
    function notify() { toast.info("Mensagem enviada, entraremos em contato!") }
    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm('service_r0d46nu', 'template_p2hdmmh', form.current, {
                publicKey: 'gaRbF6peyAhJd1D-Z',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    notify()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}
                            theme="dark"

                        />
                        <div className='ong-wrapperr'>
                            <form ref={form} onSubmit={sendEmail} >
                                <div className='form-titu'>
                                    <h2> Contato </h2>
                                </div>
                                <br />
                                <div className='input-boxx' >
                                    <label className='label-form'>Nome</label>
                                    <input type='text' ref={form} name="from_name" placeholder='digite seu Nome' required />
                                </div>

                                <div className='input-boxx'>
                                    <label className='label-form'> Gmail ou telefone para contato</label>
                                    <input type='text' ref={form} placeholder='digite sua email' name="from_email" required />
                                </div>

                                <div className='input-text'>
                                    <label className='label-form'>Escreva sua mensagem</label>
                                    {/* <label>Message</label> */}
                                    <textarea name="message"
                                        ref={form}
                                        className='mensagem-area'
                                        placeholder='Digite algo'

                                    />

                                </div>
                                <button className='bot-doarr'>Enviar</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

