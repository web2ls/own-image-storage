import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

import Upload from '../components/upload';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Upload path="/upload" />
		</Router>
	</div>
)

export default App;
