const db = require('../data/config');

function getAll() {
	return db('todos');
}

function findByID(id) {
	return db('todos').where({ id }).first();
}

async function create(data) {
	const [id] = await db('todos').insert(data);
	return findByID(id);
}

async function remove(id) {
	const todo = await db('todos').where({ id }).first();

	return db('todos').where('id', todo.id).del();
}

module.exports = {
	getAll,
	findByID,
	create,
	remove,
};
