import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Professional', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able create recipient', async () => {
    const recipient = await factory.create('Recipient');
    const response = await request(app)
      .post('/recipient')
      .send(recipient);

    expect(response.body).toHaveProperty('id');
  });
});
