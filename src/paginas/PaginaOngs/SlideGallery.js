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
            original: infoDetails.foto,
            thumbnail: infoDetails.foto,
        },
        {
            original: "https://picsum.photos/id/1015/250/150/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: infoDetails.foto3,
            thumbnail: "https://picsum.photos/id/1019/250/150/",
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
