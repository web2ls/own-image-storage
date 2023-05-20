import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/Auth';
import IconButton from '../ui/IconButton';

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await AuthService.logout();
    navigate('/login');
  };

  return (
    <HeaderWrapper>
      <Link to='/upload'>
        <IconButton icon='faSquarePlus' label='Add files' active={true} size='medium' background={true} />
      </Link>
      <UserWrapper>
        <UserAvatar />
        <UserMenuItem onClick={logout}>Logout</UserMenuItem>
      </UserWrapper>
    </HeaderWrapper>
  )
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  color: var(--black);

  & a {
    text-decoration: none;
    color: var(--black);
  }
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%);
`;

const UserMenuItem = styled.span`
  cursor: pointer;
`;