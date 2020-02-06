import faker from 'faker';
import { factory } from 'factory-girl';

import Recipient from '../src/app/models/Recipient';
import Courier from '../src/app/models/Courier';

factory.define('Recipient', Recipient, {
  name: faker.name.findName(),
  state: faker.address.state(),
  city: faker.address.city(),
  street: faker.address.streetName(),
  complement: faker.address.secondaryAddress(),
  number: faker.random.number(),
  zipcode: faker.address.zipCode(),
});

factory.define('Courier', Courier, {
  name: faker.name.findName(),
  avatar_id: faker.image.avatar(),
  email: faker.internet.email(),
});

export default factory;
