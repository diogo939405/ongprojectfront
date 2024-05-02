import React from 'react'
import axios from 'axios'
import Menu from '../../menu/Menu';
import { Outlet } from 'react-router'
import AnimatedPage from '../../AnimatedPage'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../footer/Footer';
import './SobreMim.css'
import gerarToken from '../../pagamento/Paypal'
import PagamentoTela from '../../pagamento/PagamentoTela';

// const dado = document.querySelector("#doar")
// const productId = "65e5d92e4860a9271007c2d265e5d92e4860a9271007c2d2"
// let dadospgto;
// var token = '';
// let param = ''
// let _data = {
//   id: '',
//   cardId: `${productId}`,
//   valor: `${dado}`
// }

//validar action submit do form

// fetch("http://localhost:5000/compra", {
//   method: "POST",
//   body: JSON.stringify(_data)
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// async function efetuarPagamento(token) {
//   console.log('efetuando pagamento')
//   const tokenAcess = await token
//   const response = await axios({
//     url: process.env.REACT_APP_PAYPAL_BASE_URL + '/v2/checkout/orders',
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + tokenAcess
//     },
//     data: JSON.stringify({
//       intent: 'CAPTURE',
//       purchase_units: [
//         {
//           items: [
//             {
//               name: 'diogo teste',
//               description: ' 1 teste de compra',
//               quantity: '1',
//               unit_amount: {
//                 currency_code: "BRL",
//                 value: '100'
//               }
//             }
//           ],

//           amount: {
//             currency_code: "BRL",
//             value: '100',
//             breakdown: {
//               item_total: {
//                 currency_code: 'BRL',
//                 value: '100'
//               }
//             }
//           }
//         }
//       ],

//       application_context: {
//         return_url: 'http://g1.com.br', //`http://localhost:3000/PagamentoTela?token=${token}&orderId=${response.data.id}`,
//         cancel_url: 'https://ge.globo.com/futebol/times/sao-paulo/',
//         shipping_preference: "NO_SHIPPING",
//         brand_name: 'nome da ong'
//       }

//     })
//   })
//   console.log('dados da comora', response.data)
//   if (response.data.status == 'CREATED')
//     dadospgto = response.data;
//   // pegardados(response.data)
//   return response.data.links.find(link => link.rel === 'approve').href

// }




// async function tratarPagamento() {
//   token = await gerarToken();
//   await efetuarPagamento(token)
//     .then(async result => {
//       try {
//         const url = result
//         window.open(`${url}`)
//       } catch (error) {
//         console.log('erro no redirect', error)
//       }

//     });
//   console.log('exibir pagamento')
// }



export default function SobreMim() {
  return (
    <AnimatedPage>
      <header className='cabeca'>
        <Menu />
        <div className='div-texto'>
          <div >
            <h4 className='div-titulo'>titulo pagina</h4>
          </div>
          <div className='div-info'>
            <span>
              <a href='/' className='link-home'> Home</a>
            </span>
            <span style={{ color: 'white', fontSize: '1.3rem' }}>/</span>
            <span className='pagina-atual'>SobreMim</span>
            <span></span>
          </div>
        </div>


      </header>


      <section className='introducao'>
        <Container id='corpo'>
          <Row id='linha'>
            <Col id='coluna-texto'>
              <h4 className='titulo-about'> Titulo</h4>
              <p className='texto-about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className='botoes-about'>
                <button className='botao-about'> botão aqui</button>
              </div>
              <div className='icon-about'>
                {/* <FaLinkedin /> */}
                <h4>Redes sociais aqui</h4>
              </div>
            </Col>

            <Col id='coluna-imagem'>
              {/* <Image src={}></Image> */}
              <h5>Diogo imagem</h5>

            </Col>
          </Row>
        </Container>
      </section>
      <section className='descricao'>
        {/* <form action='/compra' method='POST'> */}
        {/* <input type='number' id='doar' name='doar'></input>
        <button onClick={tratarPagamento}>aqui</button> */}

        {/* </form> */}

      </section>
      <footer>
        <Footer />
      </footer>
      <Outlet />
    </AnimatedPage>


  )
}
