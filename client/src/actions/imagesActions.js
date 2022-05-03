import Axios from 'axios';
import {
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCESS,
    IMAGE_LIST_FAIL,
} from '../constants/imagesConstants';

export const getImageList = () => async (dispatch) => {
    dispatch({
        type: IMAGE_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=work`);
        dispatch({ type: IMAGE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: IMAGE_LIST_FAIL, payload: error.message });
    }
};