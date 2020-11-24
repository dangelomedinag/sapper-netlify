import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import {json, urlencoded} from 'body-parser'
import cors from 'cors'
// import session from 'express-session'
const app = express()
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// app.use(session({
// 	secret: "app-secret",
// 	resave: false,
// 	saveUninitialized: false
// }))
app.use(json())
app.use(urlencoded({extended: false}))
app.use(cors())

app // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			// customize the session
			session: (req, res) => ({
				user: {user: "abc", pass: 123}
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
