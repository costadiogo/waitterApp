import path from 'path';
import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrders } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { deleteOrder } from './app/useCases/orders/deleteOrders';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback( null, `${Date.now()}-${file.originalname}` );
        },
    }),
});

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/categories/:categoryId/products', listProductsByCategory);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.get('/orders', listOrders);

router.post('/orders', createOrders);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', deleteOrder);
