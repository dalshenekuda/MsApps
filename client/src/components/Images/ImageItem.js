import React, {useState} from 'react';
import ImageModal from "./ImageModal";

const ImageItem = ({image}) => {

    const [isImageOpen, setImageOpen] = useState(false)
    const openHandler = () => {
        setImageOpen(!isImageOpen)
    }
    return (
        <>
            <ImageModal isImageOpen={isImageOpen} setImageOpen={setImageOpen} image={image} />
            <img className="images-grid__image"
                 onClick={() => openHandler()}
                 src={image.webformatURL}
                 alt="image item"/></>

    );
};

export default ImageItem;