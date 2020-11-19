import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import {json, urlencoded} from 'body-parser'
import cors from 'cors'

const app = express()
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app.use(json())
app.use(urlencoded({extended: false}))
app.use(cors())
app // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
