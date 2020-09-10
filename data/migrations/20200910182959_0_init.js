exports.up = async function (knex) {
	await knex.schema.createTable('todos', (table) => {
		table.increments();
		table.text('task').notNullable();
		table.boolean('isCompleted').defaultTo('false');
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('todos');
};
