import { v4 as uuidv4 } from 'uuid';
import * as express from 'express';
import connection from '../database/connection';

export default {
  async index(request: express.Request, response: express.Response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request: express.Request, response: express.Response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = uuidv4();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({
      id
    });
  },

  async delete(request: express.Request, response: express.Response) {
    const { id } = request.params;

    await connection('ongs')
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
};
