import express from 'express';
import PointsController from './controllers/PointsConroller';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsConroller = new PointsController();
const itemsController = new ItemsController();

// Request Params: Par�metros que vem na pr�pia rota e identificam o recurso
// Query Params:  Par�metros que vem na pr�pia rota geralmente opcionais para filtro, pagina��o...
// Request Body: Par�metros para cria��o, atualiza��o de recursos

routes.get('/items', itemsController.index);

routes.post('/points', pointsConroller.create);
routes.get('/points', pointsConroller.index);
routes.get('/points/:id', pointsConroller.show);

export default routes;