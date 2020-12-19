import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

import Upload from '../components/upload';
import Images from '../components/images';

const App = () => (
	<div id="app">
		<Header />
		<div class="content">
			<Router>
				<Images path="/" />
				<Upload path="/upload" />
			</Router>
		</div>
	</div>
)

export default App;
