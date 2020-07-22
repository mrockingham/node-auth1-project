
exports.up = function(knex) {
  return knex.schema
  .createTable('project', tbl=>{
      tbl.increments()
      tbl.string('name').notNullable()
  })
  .createTable('users', tbl =>{
      tbl.increments()
      tbl.string('username', 128).notNullable().unique().index()
      tbl.string('password', 256).notNullable()
    
      tbl
      .integer('project_id')
      .unsigned()
      .references('project.id')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')  
      
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExist('project')
  .dropTableIfExist('users')

};
