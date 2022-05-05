import Axios from 'axios';
import {
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCESS,
    IMAGE_LIST_FAIL,
    NEXT_PAGE_REQUEST,
    NEXT_PAGE_SUCCESS,
    NEXT_PAGE_FAIL,
} from '../constants/imagesConstants';

export const getImageList = () => async (dispatch) => {
    dispatch({
        type: IMAGE_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q`);
        dispatch({ type: IMAGE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: IMAGE_LIST_FAIL, payload: error.message });
    }
};

export const getImageListByCategory = (category) => async (dispatch) => {
    dispatch({
        type: IMAGE_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`);
        dispatch({ type: IMAGE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: IMAGE_LIST_FAIL, payload: error.message });
    }
};

export const nextPage = () => async (dispatch) => {
    dispatch({
        type: NEXT_PAGE_REQUEST,
    });
    try {
        const { data } = await Axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=work`);
        dispatch({ type: NEXT_PAGE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: NEXT_PAGE_FAIL, payload: error.message });
    }
};