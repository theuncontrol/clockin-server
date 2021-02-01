import * as express from 'express'
import ClockController from './controller/ClockController'
import UsersController from './controller/UsersController'

const routes = express.Router()

routes.post('/create', UsersController.createUser)

routes.post('/entry', ClockController.entry)
routes.post('/departure', ClockController.departure)

export default routes
