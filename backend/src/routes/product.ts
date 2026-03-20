import { Router } from 'express';
import { getProducts, getProductBySlug } from '../controllers/product';

const router = Router();

// GET all products (catalog view)
router.get('/', getProducts);

// GET a single product by slug (product details view)
router.get('/:slug', getProductBySlug);

export default router;
