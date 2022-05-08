import React, {useEffect, useState} from 'react';
import {getImageList} from "../actions/imagesActions";
import {useDispatch, useSelector} from "react-redux";
import ImageItem from "../components/Images/ImageItem";
import MessageBox from "../components/MessageBox";
import Loading from "../components/Loading";

const ImagesPage = () => {
    const [currentList, setCurrentList] = useState([])
    // take loading, error, images states from redux store
    const dispatch = useDispatch();
    const imageList = useSelector((state) => state.imageList);
    const {loading, error, images} = imageList;

    // initial request to pixabay
    useEffect(() => {
        //it will be passed to getImageList action
        dispatch(getImageList());
    }, [])

    useEffect(() => {
        if (images) {
            setCurrentList(images)
        }
    }, [images])


    return (
        <div className="images">
            {loading ? (
                <Loading/>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <>
                    {currentList.length === 0 && <MessageBox>No Image Found</MessageBox>}
                    <ul className="images-grid">
                        {currentList.map((image) => (
                            <li>
                                <ImageItem image={image} key={image.id} />
                            </li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    );
};

export default ImagesPage;