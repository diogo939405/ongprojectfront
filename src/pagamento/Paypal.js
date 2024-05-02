import axios from 'axios'



export default async function gerarToken() {
    const url = process.env.REACT_APP_PAYPAL_BASE_URL
    const response = await axios({
        url: process.env.REACT_APP_PAYPAL_BASE_URL + '/v1/oauth2/token',
        method: 'post',
        data: 'grant_type=client_credentials',
        auth: {
            username: process.env.REACT_APP_PAYPAL_CLIENT_ID,
            password: process.env.REACT_APP_PAYPAL_SECRET
        }
    })

    console.log('token aqui', response.data.access_token)

    return response.data.access_token
}

export async function createOrder() {

    //return response.data.access_token
}

export async function completeOrder() { }

export async function cancelOrder() { }

