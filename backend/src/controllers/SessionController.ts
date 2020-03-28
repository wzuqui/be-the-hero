import * as express from 'express';
import connection from '../database/connection';

export default {
  async create(request: express.Request, response: express.Response) {
    const { id } = request.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return response.status(400).json({ erro: 'No ONG found with this ID' });
    }

    return response.json(ong);
  }
};
