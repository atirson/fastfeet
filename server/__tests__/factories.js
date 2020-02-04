import faker from 'faker';
import { factory } from 'factory-girl';

import Recipient from '../src/app/models/Recipient';

factory.define('Recipient', Recipient, {
  name: faker.name.findName(),
  state: faker.address.state(),
  city: faker.address.city(),
  street: faker.address.city(),
  complement: faker.lorem.text(),
  number: faker.random.number(),
  zipcode: faker.address.zipCode(),
});

export default factory;
