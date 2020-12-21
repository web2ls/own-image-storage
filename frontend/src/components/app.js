import { h } from 'preact';
import { Router } from 'preact-router';

require('dotenv').config()

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

import Upload from '../components/upload';
import Images from '../components/images';
import Login from '../components/login';

const App = () => (
	<div id="app">
		<Header />
		<div class="content">
			<Router>
				<Images path="/" />
				<Upload path="/upload" />
				<Login path="/login" />
			</Router>
		</div>
	</div>
)

export default App;
