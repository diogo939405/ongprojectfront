import React from 'react'
import gerarToken from './Paypal';
import axios from 'axios'
import props from 'prop-types';
import params, { useParams } from 'react-router-dom';
export default function PagamentoTela() {

  const queryParameters = new URLSearchParams(window.location.search)
  const token = queryParameters.get("token")
  const payerId = queryParameters.get("PayerID")



  // var fetch = require('node-fetch');
  //   async function capturarPagamento() {
  //   // const resp = await axios({
  //   //   url: process.env.REACT_APP_PAYPAL_BASE_URL + `/v2/checkout/orders/${payerId}/capture`,
  //   //   method: 'post',
  //   //   headers: {
  //   //     'Content-Type': 'application/x-www-form-urlencoded',
  //   //     'Authorization': 'Bearer ' + t
  //   //   },
  //   // })
  //   console.log('RESULTADO ====>', resp.data.id, 'aqui capturar pagamento')
  //   return resp.data
  // }


  async function capturarPagamento() {
    var t = await gerarToken();
    //const t = 'access_token$sandbox$r4wzbb5hv3ycpskr$a28f7790d0ac671cca195ab40273d4f0'
    console.log('token gerado no pagamento', t)
    const resp = await axios({
      url: `https://api-m.sandbox.paypal.com/v2/checkout/orders/${payerId}/authorize`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a',
        'Authorization': `Bearer ${t}`//access_token$sandbox$mqwfzmfbgxwpzhyg$c975c59efbec890e83332c35ee38dd4a'

      },
    })
    console.log('RESULTADO authorized====>', resp)
    return resp.data
  }
  capturarPagamento();
  return (
    <>
      <h1>Pagamento</h1>
    </>
  )
}
