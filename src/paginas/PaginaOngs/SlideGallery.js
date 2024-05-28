import React from 'react'
import ImageGallery from "react-image-gallery";
import './SlideGallery.css'

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];

export default function SlideGallery() {
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
