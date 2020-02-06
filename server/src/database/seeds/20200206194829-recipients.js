/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');

module.exports = {
  up: queryInterface => {
    let recipients = [];

    for (let i = 1; i <= 100; i++) {
      const name = faker.name.findName();
      const state = faker.address.state();
      const city = faker.address.city();
      const street = faker.address.streetName();
      const complement = faker.address.secondaryAddress();
      const number = faker.random.number({ min: 0, max: 1000 });
      const zipcode = faker.address.zipCode();

      recipients.push({
        name,
        state,
        city,
        street,
        complement,
        number,
        zipcode,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return queryInterface.bulkInsert('recipients', recipients);
  },

  down: () => {},
};
