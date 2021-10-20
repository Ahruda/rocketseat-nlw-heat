import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageControler } from './controllers/CreateMessageControler'
import { GetLast3MessageController } from './controllers/GetLast3MessageController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageControler().handle
)

router.get('/messages/last3', new GetLast3MessageController().handle)

export { router }
