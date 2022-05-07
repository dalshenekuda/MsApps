import {SORT_IMAGES_FAIL, SORT_IMAGES_REQUEST, SORT_IMAGES_SUCCESS} from "../constants/imagesConstants";

const {
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCESS,
    IMAGE_LIST_FAIL,

    IMAGES_BY_CATEGORY_FAIL,
    IMAGES_BY_CATEGORY_REQUEST,
    IMAGES_BY_CATEGORY_SUCCESS
} = require('../constants/imagesConstants');

export const imageListReducer = (
    state = {loading: true, images: []},
    action
) => {
    switch (action.type) {
        case IMAGE_LIST_REQUEST:
            return {loading: true};
        case IMAGE_LIST_SUCCESS:
            return {loading: false, images: action.payload};
        case IMAGE_LIST_FAIL:
            return {loading: false, error: action.payload};

        case IMAGES_BY_CATEGORY_REQUEST:
            return {loading: true};
        case IMAGES_BY_CATEGORY_SUCCESS:
            return {loading: false, images: action.payload};
        case IMAGES_BY_CATEGORY_FAIL:
            return {loading: false, error: action.payload};

        case SORT_IMAGES_REQUEST:
            return {loading: true};
        case SORT_IMAGES_SUCCESS:
            return {loading: false, images: action.payload};
        case SORT_IMAGES_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};



