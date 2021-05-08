import {Router} from 'express';
const router = Router();

import * as storeController from '../controllers/store.controller'

router.post('/', storeController.createStore)
router.get('/', storeController.getStore)
router.get('/:storeId', storeController.getStoreById)
router.put('/:storeId', storeController.updateStore)
router.delete('/:storeId', storeController.deleteStore)


export default router;