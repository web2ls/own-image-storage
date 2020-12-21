import { Link } from 'preact-router/match';
import style from './style.css';

import { route } from 'preact-router';

import AuthService from '../../services/Auth';

const Header = () => {
	const tryLogout = () => {
		AuthService.logout().then(res => {
			route('/login');
		}).catch(err => {
			console.error(err);
		})
	};

	return (
		<header class={style.header}>
			<h1>OwnImageStorage</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/upload">Upload</Link>
				<Link style={{ cursor: 'pointer' }} onClick={tryLogout}>Logout</Link>
			</nav>
		</header>
	)

};

export default Header;
