import React, {useState} from 'react';
import ModalChangeCategory from "./ModalChangeCategory";
import {getImageListByCategory} from "../../actions/imagesActions";
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const [isChangingCategory, setChangingCategory] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState('')

    const changeCategory = () => {
        setChangingCategory(!isChangingCategory)
    }
    const nextPageHandler = () => {
        const newPage = currentPage + 1
        setCurrentPage(newPage)
        dispatch(getImageListByCategory(category,newPage))

    }
    const prevPageHandler = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1
            setCurrentPage(newPage)
            dispatch(getImageListByCategory(category,newPage))
        }
    }

    return (
        <header className="header">
            <ModalChangeCategory
                isChangingCategory={isChangingCategory}
                setChangingCategory={setChangingCategory}
                setCategory={setCategory}
                setCurrentPage={setCurrentPage}
            />

            <button className={`${currentPage < 2 && 'header__button--disabled'} header__button`}
                    onClick={() => prevPageHandler()}
                    disabled={currentPage < 2}

            > {`< Prev`}</button>
            <button className="header__button header__button--change-type"
                    onClick={() => changeCategory()}
            >
                Choose type
            </button>
            <button className="header__button"
                    onClick={() => nextPageHandler()}

            >{`Next >`}</button>
        </header>
    );
};

export default Header;