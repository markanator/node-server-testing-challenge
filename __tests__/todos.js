const supertest = require('supertest');
const server = require('../server');
const db = require('../data/config');

beforeEach(async () => {
	// reset the db before each test to start fresh
	await db.seed.run();
});

afterAll(async () => {
	// close databse connection after tests are completed
	await db.destroy();
});

describe('Toodos intregation tests', () => {
	//
	it('GET /todos', async () => {
		const res = await supertest(server).get('/todos');
		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
		expect(res.body).toHaveLength(4);
		expect(res.body[0].task).toBe('Watch lecture');
	});

	it('POST /todos', async () => {
		const res = await supertest(server)
			.post('/todos')
			.send({ task: 'test01', isCompleted: false });

		expect(res.status).toBe(201);
		expect(res.type).toBe('application/json');
		expect(res.body.task).toBe('test01');
	});

	it('DELETE /todos/:id', async () => {
		const post = await supertest(server)
			.post('/todos')
			.send({ task: 'test01', isCompleted: false });
		const res = await supertest(server).delete('/todos/5');

		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
		expect(res.body.message).toBe('Todo deleted!');
	});
});
