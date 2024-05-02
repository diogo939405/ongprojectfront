import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router';
import axios from 'axios';

export default function OngsDoando() {

    const { infoId } = useParams()
    const [infoDetails, setInfoDetails] = useState(null)
    let details = ''

    useEffect(() => {
        const infoDetails = async () => {
            axios.get(`http://localhost:5000/TodosDados/${infoId}`)
                .then(async (resp) => {
                    details = await resp.json()
                })
            setInfoDetails(details)
        };
        infoDetails()
    }, [infoId]);

    if (!infoDetails) {
        <p>carregando...</p>
    }

    // const { obj } = props.location.state;

    // const {inf} = props.location.state
    
    // const pegarParams = new URLSearchParams(props.location.search);
    // const obj = pegarParams.get('obj')
    // console.log(obj)
    // const dataCatch = (props) => {
    //     console.log('props em doando', props)
    //     const pegarParams = new URLSearchParams(props.location.search);
    //     const obj = pegarParams.get('obj')
    // }

    // const id = pegarParams.get('id')
    // const nome = pegarParams.get('Nome')
    // const descriçãoCurta = pegarParams.get('descriçãoCurta')
    // const descriçãoLonga = pegarParams.get('descriçãoLonga')
    // const pais = pegarParams.get('Pais')
    // const city = pegarParams.get('city')


    return (
        <div>
            <h1>{infoDetails._id}</h1>
        </div>

    )
}

