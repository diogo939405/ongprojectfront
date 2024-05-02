import React from 'react'
import gerarToken from './Paypal';
import axios from 'axios'
import props from 'prop-types';




export default function PagamentoTela() {




  // const { token, orderid } = props.params
  // console.log('TESTE DE PARAM', token, orderid)


  // async function pegardados() {
  //   var dados = param;
  //   const orderId = dados.id;

  //   console.log('pagamento tela', orderId, param)
  //   // const acessToken = await gerarToken()
  //   // console.log('TOKEN EM PEGAR', acessToken, param, process.env.REACT_APP_PAYPAL_BASE_URL + `/v2/checkout/orders/${orderId}/capture`)
  //   const response = await axios({
  //     url: process.env.REACT_APP_PAYPAL_BASE_URL + `/v2/checkout/orders/${orderId}/capture`,
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //       'PayPal-Request-Id': orderId,
  //     }
  //   })
  //   const data = await response.json()
  //   console.log('response 2', data);
  // }

  // pegardados();
  return (
    <div>
      <h1>pagamento</h1>
    </div>
  )
}
