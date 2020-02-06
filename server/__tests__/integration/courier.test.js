import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Professional', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able create courier', async () => {
    const courier = await factory.attrs('Courier');

    const response = await request(app)
      .post('/couriers')
      .set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgwOTQwNjUyLCJleHAiOjE1ODE1NDU0NTJ9.hxN4lHfsMWHDRmyI4Lu99vFQaSk_CqBOR7dNTfH5YRE`
      )
      .send(courier);

    expect(response.body).toHaveProperty('id');
  });
});
