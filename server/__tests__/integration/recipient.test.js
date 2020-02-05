import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Professional', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able create recipient', async () => {
    const recipient = await factory.attrs('Recipient');

    const response = await request(app)
      .post('/recipients')
      .set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgwOTQwNjUyLCJleHAiOjE1ODE1NDU0NTJ9.hxN4lHfsMWHDRmyI4Lu99vFQaSk_CqBOR7dNTfH5YRE`
      )
      .send(recipient);

    expect(response.body).toHaveProperty('id');
  });
});
