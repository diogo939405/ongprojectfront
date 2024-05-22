import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';

const BotaoPagamento = (props) => {
    const { products } = props;
    const [paidFor, setPaidFor] = useState(false)
    const [erro, setErro] = useState(null)

    const handleApprove = (orderID) => {
        //if response is sucess
        setPaidFor(true)
        if (paidFor) { window.alert('pagamento sucesso') }
    }

    if (erro) { window.alert('pagamento deu erro') }

    return <PayPalButtons

        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: products.description,
                        amount: {
                            currency_code: "BRL",
                            value: products.price
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
            console.error('pagamento com erro', err)
        }}
    />;
};

export default BotaoPagamento;