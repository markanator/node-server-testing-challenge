exports.seed = async function (knex) {
	await knex('todos').truncate();
};
