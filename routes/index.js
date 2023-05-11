const routes = require('express').Router();
const contactRoute = require('./contacts-route');

routes.use('/', require('./swagger'));
routes.use('/', contactRoute);

module.exports = routes;
