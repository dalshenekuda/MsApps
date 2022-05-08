import React, {useState} from 'react';
import ModalChangeCategory from "./ModalChangeCategory";
import {getImageListByCategory, sortImagesInPageById} from "../../actions/imagesActions";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

    const dispatch = useDispatch();
    const imageList = useSelector((state) => state.imageList);
    const {images} = imageList

    const [isChangingCategory, setChangingCategory] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState('')

    const changeCategory = () => {
        setChangingCategory(!isChangingCategory)
    }
    //does page+1 and just make the request of images by category (in action)
    const nextPageHandler = () => {
        const newPage = currentPage + 1
        setCurrentPage(newPage)
        dispatch(getImageListByCategory(category, newPage))

    }
    //does page-1 and just make the request of images by category (in action)
    const prevPageHandler = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1
            setCurrentPage(newPage)
            dispatch(getImageListByCategory(category, newPage))
        }
    }
    const sortHandler = () => {
        dispatch(sortImagesInPageById(images))
    }

    return (
        <header className="header">
            {/*passes props to managing of model*/}
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
            <div className="header__center-buttons">
                <button className="header__button header__button--change-type"
                        onClick={() => changeCategory()}
                >
                    Choose type
                </button>

                <button className="header__button header__button--sort"
                        onClick={() => sortHandler()}

                >{`Sort in page`}</button>
            </div>

            <button className="header__button"
                    onClick={() => nextPageHandler()}

            >{`Next >`}</button>
        </header>
    );
};

export default Header;