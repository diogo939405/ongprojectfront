import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState, useEffect } from 'react';
import { FUNDING } from "@paypal/react-paypal-js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BotaoPagamento = (props) => {
    const { products } = props.product;
    const [paidFor, setPaidFor] = useState(false)
    const [erro, setErro] = useState(null)
    const [valor, setValor] = useState("1")
    console.log('props', props, props.price, props.doar?.value)
    useEffect(() => {
        // console.log('useEffect', props.product.price)
        setValor(parseFloat(props.price).toFixed(2))
        console.log('useEffect', valor, 'PASSOU VALOR')
    }, [props]);

    const style = {
        "layout": "vertical",
        "shape": "rect",
        "color": "silver",
        "size": "small",
        "label": "pay",
        "height": 48,
        "tagline": "false",
        "borderRadius": 10,
        "padding": 20,
        "heigth": 55
    }

    function notify() {
        toast.info("Houve um problema ao efetuar o pagamento,por favor tente de novo ou aperte F5")
    }

    const handleApprove = (orderID) => {
        //if response is sucess
        setPaidFor(true)
        if (paidFor) { window.alert('pagamento sucesso') }
        window.location.href = "/PagamentoTela"
    }

    if (erro) {
        notify()
        // window.alert('pagamento deu erro' + props.price + '--' + parseFloat(props.price).toFixed(2))
        console.log('NO BOTAO')
    }

    return <PayPalButtons


        style={style}
        createOrder={(data, actions) => {
            return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        description: 'oie',
                        amount: {
                            currency_code: "USD",
                            value: props.doar?.value // parseFloat(Number(props.price)).toFixed(2),
                        }
                    }
                ]
            })
        }}
        onApprove={async (data, actions) => {
            const orders = await actions.order.capture();
            console.log('ordem PASSOU')

            handleApprove(data.orderID)
        }}
        onCancel={() => {
            // window.alert('pagamento  cancelada')
        }}
        onError={(err) => {
            setErro(err)
            console.error('pagamento com erro')
        }}
        fundingSource={FUNDING.PAYPAL}
    />;
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

    />
};

export default BotaoPagamento;