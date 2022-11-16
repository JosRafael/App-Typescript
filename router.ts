import { Router } from 'express';
import { createCategory } from './src/app/useCases/categories/createCategory';
import { listCategories } from './src/app/useCases/categories/listCategories';

export const router = Router();

//casos de uso:
// List categories
router.get('/categories', (listCategories));


//Create categories
router.post('/categories', (createCategory));

//List products
router.get('/products', (req, res) => {
    res.send('Ok');
});

//Create products
router.post('/products', (req, res) => {
    res.send('Ok');
});

//Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('Ok');
});

//List Orders
router.get('/orders', (req, res) => {
    res.send('Ok');
});

//Create order
router.post('/orders', (req, res) => {
    res.send('Ok');
});

//Cange order status, alteração parcial se usa metodo patch
router.patch('/orders/:orderId', (req, res) => {
    res.send('Ok');
});

//Delete/cancel order
//Cange order status, alteração parcial se usa metodo patch
router.delete('/orders/:orderId', (req, res) => {
    res.send('Ok');
});
