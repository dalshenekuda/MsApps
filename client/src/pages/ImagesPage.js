import React, {useEffect} from 'react';
import {getImageList} from "../actions/imagesActions";
import {useDispatch, useSelector} from "react-redux";
import ImageItem from "../components/Images/ImageItem";
import MessageBox from "../components/MessageBox";
import Loading from "../components/Loading";

const ImagesPage = () => {

    const dispatch = useDispatch();
    const imageList = useSelector((state) => state.imageList);
    const {loading, error, images} = imageList;

    useEffect(() => {
        dispatch(getImageList({}));
    }, [])
    return (
        <div className="images">
            {loading ? (
                 <Loading />
            ): error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <>
                    {images.length === 0 && <MessageBox>No Image Found</MessageBox>}

                    <ul className="images__list">
                        {images.map((image) => (
                            <li>
                                <ImageItem image={image} key={image.id}/>
                            </li>
                        ))}
                    </ul>
                </>
            )}


        </div>
    );
};

export default ImagesPage;