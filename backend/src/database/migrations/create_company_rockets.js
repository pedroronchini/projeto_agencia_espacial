exports.up = function(knex) {
    return knex.schema.createTable('company_rockets', function (table) {
      table.increments('id').primary();
      table.integer('company_id').notNullable().references('id').inTable('company');
      table.integer('rockets_id').notNullable().references('id').inTable('rockets');
    });
};
    
exports.down = function(knex) {
    return knex.schema.dropTable('company_rockets');
};