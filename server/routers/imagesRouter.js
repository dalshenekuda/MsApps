import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// import data from '../data.js';


const imagesRouter = express.Router();


imagesRouter.get(
    '/categories',
    expressAsyncHandler(async (req, res) => {
        // const categories = await Product.find().distinct('category');
        // res.send(categories);
    })
);


imagesRouter.post(
    '/',
    expressAsyncHandler(async (req, res) => {
        // const product = new Product({
        //     name: 'sample name ' + Date.now(),
        //
        // });
        // const createdProduct = await product.save();
        // res.send({ message: 'Product Created', product: createdProduct });
    })
);

export default imagesRouter;