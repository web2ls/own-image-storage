import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';

require('dotenv').config();

import AuthService from '../services/Auth';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Header from './header';
import UploadWithAuth from '../components/upload';
import ImagesWithAuth from '../components/images';
import Login from '../components/login';

const App = () => {
	const [isAuth, setIsAuth] = useState(AuthService.isAuthorized());

	useEffect(() => {
		AuthService.initAuthObserver(onChangeAuth);
	}, []);

	const onChangeAuth = (user) => {
		if (user) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	};

	return (
		<div id="app">
			<Header isAuth={isAuth} />
			<div class="content">
				<Router>
					<ImagesWithAuth path="/" />
					<UploadWithAuth path="/upload" />
					<Login path="/login" />
				</Router>
			</div>
		</div>
	)
}

export default App;
