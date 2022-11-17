import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import { router } from './router';


mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());

        app.use(router);

        const PORT = 8080;

        app.listen(8080, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(() => console.log('Error in connection with mongodb'));


