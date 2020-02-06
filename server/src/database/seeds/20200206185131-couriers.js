/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');

module.exports = {
  up: queryInterface => {
    let couriers = [];

    for (let i = 1; i <= 100; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const email = faker.internet.email(firstName, lastName);

      couriers.push({
        name: `${firstName} ${lastName}`,
        email,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return queryInterface.bulkInsert('couriers', couriers);
  },
  down: () => {},
};
