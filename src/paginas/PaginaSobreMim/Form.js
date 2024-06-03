import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'

export default function Form() {
    const form = useRef();
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


                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const margin = (e) => {
        // const textarea = document.querySelector("textarea")
        // let x = document.body.scrollHeight
        // let sHeigth = e.x;
        // console.log(sHeigth)
    }

    return (

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
                        onKeyUp={margin}
                    />

                </div>
                <button className='bot-doarr'>Enviar</button>

                {/* <button id='botao-doar'> Doar </button> */}
                {/* onClick={(x) => tratarPagamento(x)} */}
            </form>

        </div>
        // <form ref={form} onSubmit={sendEmail}>
        //   <label>Name</label>
        //   <input type="text" name="user_name" />
        //   <label>Email</label>
        //   <input type="email" name="user_email" />
        //   <label>Message</label>
        //   <textarea name="message" />
        //   <input type="submit" value="Send" />
        // </form>


    );
};

