import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState, useEffect } from 'react';

const BotaoPagamento = (props) => {
    const { products } = props.product;
    const [paidFor, setPaidFor] = useState(false)
    const [erro, setErro] = useState(null)
    const [valor, setValor] = useState("1")
    console.log('props', props, props.price, props.doar?.value)
    useEffect(() => {
        // console.log('useEffect', props.product.price)
        setValor(parseFloat(props.price).toFixed(2))
        console.log('useEffect', valor)
    }, [props]);


    const handleApprove = (orderID) => {
        //if response is sucess
        setPaidFor(true)
        if (paidFor) { window.alert('pagamento sucesso') }
    }

    if (erro) { window.alert('pagamento deu erro' + props.price + '--' + parseFloat(props.price).toFixed(2)) }

    return <PayPalButtons

        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: 'props.product.description',
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
            console.log('ordem', orders)

            handleApprove(data.orderID)
        }}
        onCancel={() => {
            // window.alert('pagamento  cancelada')
        }}
        onError={(err) => {
            setErro(err)
            console.error('pagamento com erro', props.price)
        }}
    />;
};

export default BotaoPagamento;