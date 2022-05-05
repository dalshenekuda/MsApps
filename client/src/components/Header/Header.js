import React, {useState} from 'react';
import ModalHeader from "./ModalHeader";

const Header = () => {
    const [isChoosingCategory, setChoosingCategory] = useState(false)
    const chooseCategory = () => {

        setChoosingCategory(!isChoosingCategory)
        // console.log(isChoosingType)
    }


    return (
        <header className="header">
            <ModalHeader
                isChoosingCategory ={isChoosingCategory}
                setChoosingCategory={setChoosingCategory}
            />

            <button className="header__button"> {`< Prev`}</button>
            <button className="header__button header__button--change-type"
                    onClick={() => chooseCategory()}
            >
                Choose type
            </button>
            <button className="header__button">{`Next >`}</button>
        </header>
    );
};

export default Header;