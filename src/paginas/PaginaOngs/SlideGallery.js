import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import axios from 'axios';
import './SlideGallery.css'



export default function SlideGallery() {

    const { infoId } = useParams()
    const [infoDetails, setInfoDetails] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/TodosDados/${infoId}`)
            .then((resp) => {
                setInfoDetails(resp.data)
                console.log('dados do card na galeria', infoDetails.foto)
               
            })
    }, [infoId]);

    const images = [
        {
            original: infoDetails.foto2,
            thumbnail: infoDetails.foto1,
        },
        {
            original: infoDetails.foto3,
            thumbnail:  infoDetails.foto3,
        },
        {
            original:  infoDetails.foto4,
            thumbnail:  infoDetails.foto4,
        },
    ];
    return (
        <div>
            <ImageGallery items={images}
                showPlayButton={true}
                slideInterval={1000}
                showFullscreenButton={false}
                slideOnThumbnailOver={true}
                showIndex={true}
                useBrowserFullscreen={true} />;
        </div>
    )
}
