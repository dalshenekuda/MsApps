import React from 'react';
import Modal from "../Modal";

const ImageModal = ({isImageOpen, setImageOpen, image}) => {
    return (
        <Modal
            visible={isImageOpen}
            closeModal={setImageOpen}
        >
            <div className="image__modal">
                <p>{`Views :  ${image?.views}`}</p>
                <p>{`Downloads : ${image?.downloads}`}</p>
                <p>{`Collections :  ${image?.collections}`}</p>
                <p>{`Likes : ${image?.likes}`}</p>
            </div>
        </Modal>
    );
};

export default ImageModal;