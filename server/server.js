import express from 'express';
import dotenv from 'dotenv';
import imagesRouter from './routers/imagesRouter.js';

dotenv.config();
// create an express application
const app = express();
// for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routers
app.use('/api/images', imagesRouter);

app.use((err, req, res) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
