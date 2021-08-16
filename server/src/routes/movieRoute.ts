import {Router} from "express";

import {movieController} from '@controllers/movieController'
import {verifyAuth} from '@middleware/verifyAuth'

const router = Router()

router.post('/', verifyAuth, movieController.create)
router.put('/:id', verifyAuth, movieController.update)
router.delete('/:id', verifyAuth, movieController.delete)
router.get('/', verifyAuth, movieController.getAll)
router.get('/find/:id', movieController.get)
router.get('/random', movieController.random)


export const MovieRouter = router
