const knex = require('knex');
const knexfile = require('../knexfile');
const enviro = process.env.NODE_ENV || 'development';

module.exports = knex(knexfile[enviro]);
