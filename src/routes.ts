import express from 'express';
import PointsController from './controllers/PointsConroller';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsConroller = new PointsController();
const itemsController = new ItemsController();

// Request Params: Parâmetros que vem na própia rota e identificam o recurso
// Query Params:  Parâmetros que vem na própia rota geralmente opcionais para filtro, paginação...
// Request Body: Parâmetros para criação, atualização de recursos

routes.get('/items', itemsController.index);

routes.post('/points', pointsConroller.create);
routes.get('/points', pointsConroller.index);
routes.get('/points/:id', pointsConroller.show);

export default routes;