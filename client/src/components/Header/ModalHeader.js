import React, {useState} from 'react';
import Modal from "../Modal";
import {getImageListByCategory} from "../../actions/imagesActions";

const ModalHeader = ({isChoosingCategory, setChoosingCategory}) => {

    const [category, setCategory] = useState('work')

    const categoryHandler = () => {
        getImageListByCategory(category)
    }
    const selectHandler=(e)=>{
        setCategory(e.target.value)
    }

    return (
        <Modal
            visible={isChoosingCategory}
            closeModal={setChoosingCategory}
        >
            <div className="header__modal">
                <h2>Choose type</h2>

                <select className="header__select"
                        value={category}
                        onChange={(e)=>selectHandler(e)} >
                    <option value="work">Work</option>
                    <option value="fashion">Fashion</option>
                    <option value="computer">Computer</option>
                    <option value="food">Food</option>
                </select>

                <button className="header__save-button" onClick={() => categoryHandler()}>Save</button>
            </div>
        </Modal>
    );
};

export default ModalHeader;