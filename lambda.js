'use strict';
const awsLambdaFastify = require('aws-lambda-fastify');
const app = require('./dist/app').default;

const proxy = awsLambdaFastify(app);

exports.handler = proxy;
