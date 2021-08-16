import {Router} from 'express'

import {userController} from '@controllers/userController'
import {verifyAuth} from '@middleware/verifyAuth'

const router = Router()

router.put('/:id', verifyAuth, userController.update)
router.delete('/:id', verifyAuth, userController.delete)
router.get('/', verifyAuth, userController.getAll)
router.get('/find/:id', userController.get)
router.get('/stats', userController.getStatus)

export const UserRouter = router
