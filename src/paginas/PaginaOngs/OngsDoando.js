import React from 'react'
import { Outlet } from 'react-router';

export default function OngsDoando(props) {
    debugger
    const { obj } = props.location.state;

    // const {inf} = props.location.state
    console.log('PROPS EM DOANDO', props, obj)
    // const pegarParams = new URLSearchParams(props.location.search);
    // const obj = pegarParams.get('obj')
    // console.log(obj)
    const dataCatch = (props) => {
        console.log('props em doando', props)
        const pegarParams = new URLSearchParams(props.location.search);
        const obj = pegarParams.get('obj')

        // const id = pegarParams.get('id')
        // const nome = pegarParams.get('Nome')
        // const descriçãoCurta = pegarParams.get('descriçãoCurta')
        // const descriçãoLonga = pegarParams.get('descriçãoLonga')
        // const pais = pegarParams.get('Pais')
        // const city = pegarParams.get('city')
    }

    return (

        <div>

            <h1>{dataCatch.nome}</h1>
        </div>

    )
}

