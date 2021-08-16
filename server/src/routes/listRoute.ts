import {Router} from 'express'

import {listController} from '@controllers/listController'
import {verifyAuth} from '@middleware/verifyAuth'

const router = Router()

router.post('/', verifyAuth, listController.create)

router.delete('/:id', verifyAuth, listController.delete)

router.get('/', listController.get)

router.put('/:id', verifyAuth, listController.update)


export const ListRoute = router
