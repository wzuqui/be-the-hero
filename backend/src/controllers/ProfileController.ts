import * as express from 'express';
import connection from '../database/connection';

export default {
  async index(request: express.Request, response: express.Response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  }
};
