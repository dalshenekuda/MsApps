import React, {useEffect, useState} from 'react';
import {getImageList} from "../actions/imagesActions";
import {useDispatch, useSelector} from "react-redux";
import ImageItem from "../components/Images/ImageItem";
import MessageBox from "../components/MessageBox";
import Loading from "../components/Loading";

const ImagesPage = () => {
    const [currentList, setCurrentList] = useState([])
    const [category,setCategory] = useState('work')
    const dispatch = useDispatch();
    const imageList = useSelector((state) => state.imageList);
    const {loading, error, images} = imageList;

    useEffect(() => {
        dispatch(getImageList(category));
    }, [])

    useEffect(() => {
        if (images?.hits) {
            const list = images.hits.slice(0, 9)
            setCurrentList(list)
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