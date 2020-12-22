import style from './style.css';

import { route } from 'preact-router';

import AuthService from '../../services/Auth';

import { useState } from 'preact/hooks';

const Login = () => {
  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  const tryLogin = (event) => {
    event.preventDefault();

    if (!login || !passwd) {
      console.log('Data is empty');
      return;
    }

    AuthService.login(login, passwd).then(res => {
      route('/');
    }).catch(err => {
      route('/login');
    })
  };

  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const onChangePasswd = (event) => {
    setPasswd(event.target.value);
  };

  return (
    <div class={style.login}>
      <form>
        <div>
          <input
            class={style.loginInput}
            type="text"
            placeholder="enter your login..."
            value={login}
            onChange={onChangeLogin} />
        </div>
        <div>
          <input
            class={style.loginInput}
            type="password"
            placeholder="enter your password..."
            value={passwd}
            onChange={onChangePasswd} />
        </div>
        <div>
          <button class={style.loginBtn} type="submit" onClick={tryLogin}>Login</button>
        </div>
      </form>
    </div>
  )
};

export default Login;