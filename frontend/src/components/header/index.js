import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import style from './style.css';

import AuthService from '../../services/Auth';

const Header = (props) => {
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
			{
				props.isAuth && (
					<nav>
						<Link activeClassName={style.active} href="/">Home</Link>
						<Link activeClassName={style.active} href="/upload">Upload</Link>
						<Link style={{ cursor: 'pointer' }} onClick={tryLogout}>Logout</Link>
					</nav>
				)
			}
		</header>
	)

};

export default Header;
