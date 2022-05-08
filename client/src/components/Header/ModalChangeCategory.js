import React, {useState} from 'react';
import Modal from "../Modal";
import {useDispatch} from "react-redux";
import {getImageListByCategory} from "../../actions/imagesActions";

const ModalChangeCategory = ({isChangingCategory, setChangingCategory, setCategory,setCurrentPage}) => {
    // local state of tag select
    const [categoryOption, setCategoryOption] = useState('work')
    const dispatch = useDispatch();
    //if user has chosen some new category we take from backend a 1st images page of the category and close pop up(modal)
    const changeCategoryHandler = () => {
        setCurrentPage(1)
        setCategory(categoryOption)
        dispatch(getImageListByCategory(categoryOption, 1))
        setChangingCategory(false)
    }
    const selectHandler = (e) => {
        setCategoryOption(e.target.value)
    }

    return (
        <Modal
            visible={isChangingCategory}
            closeModal={setChangingCategory}
        >
            <div className="header__modal">
                <h2>Choose type</h2>

                <select className="header__select"
                        value={categoryOption}
                        onChange={(e) => selectHandler(e)}>
                    <option value="work">Work</option>
                    <option value="fashion">Fashion</option>
                    <option value="computer">Computer</option>
                    <option value="food">Food</option>
                </select>

                <button className="header__save-button" onClick={() => changeCategoryHandler()}>Save</button>
            </div>
        </Modal>
    );
};

export default ModalChangeCategory;