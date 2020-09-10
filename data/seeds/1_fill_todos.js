exports.seed = async function (knex) {
	await knex('todos').insert([
		{ id: 1, task: 'Watch lecture', isCompleted: false },
		{ id: 2, task: 'Read assigned chapters', isCompleted: false },
		{ id: 3, task: 'Post on discussions', isCompleted: false },
		{ id: 4, task: 'Reply on 3 peer discussion posts', isCompleted: false },
	]);
};
