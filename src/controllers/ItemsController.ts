import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
        const serializedItems = items.map( items => {
            return {
                id: items.id,
                title: items.title,
                image_url: `http://192.168.1.2:3333/uploads/${items.image}`
            }
        })
        return res.json(serializedItems)
    }
}

export default ItemsController;