import { Router } from 'express'
const router = Router();

import {
    getOperations,
    createOperation,
    updateOperation,
    deleteOperation
} from '../../controllers/operation.controller';

router.get('/', getOperations);

router.post('/', createOperation);

router.put('/:idOp', updateOperation);

router.delete('/:idOp', deleteOperation);

export default router