import React, { useRef } from 'react';
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
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (

        <div className='ong-wrapper'>
            <form ref={form} onSubmit={sendEmail} >
                <div className='form-titu'>
                    <h2> Contato </h2>
                </div>
                <br />
                <div className='input-box' >
                    <input type='text' name="from_name" placeholder='digite seu Nome' required />
                </div>

                <div className='input-box'>
                    <input type='text' placeholder='digite sua email' name="from_email" required />
                </div>

                <div className='input-box'>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <div className='paypal-button-container'>
                    <button>doeee</button>
                    {/* <BotaoPagamento product={infoDetails} price={inputValue} doar={doar} /> */}
                </div>

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

