import Axios from 'axios';
import {
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCESS,
    IMAGE_LIST_FAIL,

    IMAGES_BY_CATEGORY_REQUEST,
    IMAGES_BY_CATEGORY_SUCCESS,
    IMAGES_BY_CATEGORY_FAIL,

    SORT_IMAGES_FAIL,
    SORT_IMAGES_REQUEST,
    SORT_IMAGES_SUCCESS,

} from '../constants/imagesConstants';
// initial request to pixabay
export const getImageList = () => async (dispatch) => {
    dispatch({
        type: IMAGE_LIST_REQUEST,
    });
    try {
        const {data} = await Axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9&page=1`);
        dispatch({type: IMAGE_LIST_SUCCESS, payload: data.hits});
    } catch (error) {
        dispatch({type: IMAGE_LIST_FAIL, payload: error.message});
    }
};
//request to our backend, if used didnt select category will be passed "" and backed will do default request
export const getImageListByCategory = (category,page) => async (dispatch) => {
    dispatch({
        type: IMAGES_BY_CATEGORY_REQUEST,
    });
    try {
        const {data} = await Axios.get(`/api/images?category=${category}&page=${page}`);

        dispatch({type: IMAGES_BY_CATEGORY_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: IMAGES_BY_CATEGORY_FAIL, payload: error.message});
    }
};

//passes current list of images, and take sorted list
export const sortImagesInPageById = (imagesList) => async (dispatch) => {
    dispatch({
        type: SORT_IMAGES_REQUEST,
    });
    try {
        const {data} = await Axios.post(`/api/images/sort`,{
            imagesList:imagesList
        });
        dispatch({type: SORT_IMAGES_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: SORT_IMAGES_FAIL, payload: error.message});
    }
};

