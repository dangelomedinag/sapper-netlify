import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import {json, urlencoded} from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import apiRouter from '../app/router'

dotenv.config()
const app = express()
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app // You can also use Express
	.use(json()).use(urlencoded({extended: false})).use(cors())
	.use('/api', apiRouter)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({user: false})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
