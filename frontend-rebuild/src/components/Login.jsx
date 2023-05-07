import styled from 'styled-components';
import MenuButton from '../ui/MenuButton';

const Login = () => {
  return (
    <Blackground>
      <LoginWrapper>
        <Header>
          <h3>sign in</h3>
        </Header>
        <InputsWrapper>
          <input type='text' placeholder='email' />
          <input type='password' placeholder='password' />
        </InputsWrapper>

        <MenuButton label='Login' active={true} alignLabel='center' />
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
