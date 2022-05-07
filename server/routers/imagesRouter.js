import express from 'express';
import Axios from 'axios';
import expressAsyncHandler from 'express-async-handler';

const imagesRouter = express.Router();

imagesRouter.post(
    '/',
    expressAsyncHandler(async (req, res) => {
        try {
            const {category, page} = req.body
            let data
            if (category !== '') {
                data = await Axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&per_page=90`);
            } else {
                data = await Axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=90`);
            }

            const imagesPage = data.data.hits.slice((page - 1) * 9, page * 9)

            res.send(imagesPage);
        } catch (error) {
            res.status(404).send({message: 'Images Not Found'});
        }
    })
);

imagesRouter.post(
    '/sort',
    expressAsyncHandler(async (req, res) => {
        try {
            const imagesList = req.body.imagesList
            imagesList.sort((imageA, imageB) => imageA.id - imageB.id)

            res.send(imagesList);
        } catch (error) {
            res.status(404).send({message: 'Images Not Sorted'});
        }
    })
);


export default imagesRouter;