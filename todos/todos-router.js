const express = require('express');
const Todos = require('./todos-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const todos = await Todos.getAll();
		res.status(200).json(todos);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const todo = await Todos.create(req.body);
		res.status(201).json(todo);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		await Todos.remove(req.params.id);
		res.status(200).json({
			message: 'Todo deleted!',
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
