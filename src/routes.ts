import * as express from 'express'
import ClockController from './controller/ClockController'

const routes = express.Router()

routes.get('/', ClockController.index)

export default routes
