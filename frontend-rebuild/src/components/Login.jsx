import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as EmailValidator from 'email-validator';
import MenuButton from '../ui/MenuButton';
import AuthService from '../services/Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmptyErr, setIsEmptyErr] = useState(false);
  const [isEmailFormatErr, setIsEmailFormatErr] = useState(false);
  const [isLoginErr, setIsLoginErr] = useState(false);
  // TODO: добавить подстветку инпутов на основе этого флага
  const [isErr, setIsErr] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsErr(isEmptyErr || isEmailFormatErr || isLoginErr);
  }, [isEmptyErr, isEmailFormatErr, isLoginErr]);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onPressEnter = (event) => {
    if (event.code !== 'Enter') return;

    onSubmit();
  };

  const onSubmit = () => {
    resetErr();

    if (!email.trim() || !password.trim()) {
      setIsEmptyErr(true);
      return;
    }

    if (!EmailValidator.validate(email)) {
      setIsEmailFormatErr(true);
      return;
    }

    AuthService.login(email, password).then(res => {
      console.log(res);
      navigate('/');
    }).catch(err => {
      console.error(err);
      setIsLoginErr(true);
    })
  }

  const resetErr = () => {
    setIsEmptyErr(false);
    setIsEmailFormatErr(false);
    setIsLoginErr(false);
  }

  return (
    <Blackground>
      <LoginWrapper>
        <Header>
          <h3>authorization</h3>
        </Header>
        <Input
            type='text'
            value={email}
            onChange={onChangeEmail}
            placeholder='email'
            $isError={isErr}
            onKeyDown={onPressEnter} />
          <Input
            type='password'
            value={password}
            onChange={onChangePassword}
            placeholder='password'
            $isError={isErr}
            onKeyDown={onPressEnter} />

          {isEmptyErr && (
            <ErrorWrapper>Please fill in all the fields</ErrorWrapper>
          )}
          {isEmailFormatErr && (
            <ErrorWrapper>Email format is incorrect</ErrorWrapper>
          )}
          {isLoginErr && (
            <ErrorWrapper>Login or password is incorrect</ErrorWrapper>
          )}


        <MenuButton label='Login' active={true} alignLabel='center' onClick={onSubmit} />
      </LoginWrapper>
    </Blackground>
  )
};

export default Login;

const Blackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.9);
`;

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  width: 300px;
  text-align: center;
  border-radius: 12px;
  border-radius: 12px 12px 0 0;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  background: var(--purple-gradient);
  color: var(--white);
  text-transform: uppercase;
  line-height: 50px;
  margin-bottom: 20px;
  border-radius: 10px 10px 0 0;

  & h3 {
    margin: 0;
    font-size: 14px;
  }
`;

const InputsWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;

  & input {
    width: 80%;
    height: 40px;
    margin-bottom: 20px;
    padding: 0 5px;
    border: 1px solid var(--purple-second);
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.9);
    color: var(--white);
  }
`;

const ErrorWrapper = styled.div`
  color: var(--error);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 28px;
`;

const Input = styled.input`
    width: 80%;
    height: 40px;
    margin-bottom: 20px;
    padding: 0 5px;
    border: ${({$isError}) => $isError ? '1px solid var(--error)' : '1px solid var(--purple-second)'};
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.9);
    color: var(--white);
`;
