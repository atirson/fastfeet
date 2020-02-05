import faker from 'faker';
import { factory } from 'factory-girl';
import bcrypt from 'bcryptjs';

import Recipient from '../src/app/models/Recipient';
import Admin from '../src/app/models/Admin';

factory.define('Recipient', Recipient, {
  name: faker.name.findName(),
  state: faker.address.state(),
  city: faker.address.city(),
  street: faker.address.city(),
  complement: faker.lorem.text(),
  number: faker.random.number(),
  zipcode: faker.address.zipCode(),
});

factory.define('Admin', Admin, {
  name: 'Distribuidora FastFeet',
  email: 'admin@fastfeet.com',
  password_hash: bcrypt.hashSync('123456', 8),
});

export default factory;
