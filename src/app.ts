import express from 'express'
import bodyparser from 'body-parser';
import {requestLoggerMiddleware} from "./request.logger.middleware";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from '../build/routes'
import cors from 'cors';
const swaggerData = require('../build/swagger.json')
const swaggerConfig = {
  swaggerOptions: {
    displayOperationId: true
  }
}

export const app = express();
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());
app.use(requestLoggerMiddleware);
app.use(cors())
app.use('/swagger', swaggerUi.serve);
app.use('/swagger', swaggerUi.setup(swaggerData, swaggerConfig));


RegisterRoutes (app);
