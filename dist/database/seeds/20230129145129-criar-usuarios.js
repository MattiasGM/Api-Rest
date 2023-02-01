"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Maria 1',
          email: 'maria1@test.com',
          password_hash: await bcryptjs.hash('213432', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Maria 2',
          email: 'maria2@test.com',
          password_hash: await bcryptjs.hash('234234', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Maria 3',
          email: 'maria3@test.com',
          password_hash: await bcryptjs.hash('234564453', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down() {
    return null;
  },
};
