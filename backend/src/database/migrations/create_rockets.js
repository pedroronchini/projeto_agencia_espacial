exports.up = function(knex) {
    return knex.schema.createTable('rockets', function (table) {
        table.increments('id').primary();
        table.string('model').notNullable();
        table.string('price').notNullable();
        table.string('dates_available').notNullable();
        table.integer('sits_available').notNullable();
        table.string('available_booking').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('rockets');
  };
  