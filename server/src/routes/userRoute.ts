import {Router} from 'express'

import {userController} from '@controllers/userController'
import {verifyAuth} from '@middleware/verifyAuth'

const route = Router()

route.put('/:id', verifyAuth, userController.update)
route.delete('/:id', verifyAuth, userController.delete)
route.get('/', verifyAuth, userController.getAll)
route.get('/find/:id', userController.get)
route.get('/stats', userController.getStatus)

export const UserRouter = route
