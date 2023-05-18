import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import MenuButton from '../ui/MenuButton';

import { logo } from '../assets/images';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <img className='logo' src={logo} alt='logo' />
      <Navigation>
        <LinkWrapper to='/cloud'>
          {({ isActive, isPending }) => (
            <MenuButton active={isActive} label='My Cloud' icon='faWindowMaximize' />
          )}
        </LinkWrapper>
        <LinkWrapper to='/images'>
          {({ isActive }) => (
            <MenuButton active={isActive} label='Shared Files' icon='faWindowMaximize' />
          )}
        </LinkWrapper>
        <LinkWrapper to='/shared'>
          {({ isActive }) => (
            <MenuButton active={isActive} label='Images' icon='faWindowMaximize' />
          )}
        </LinkWrapper>
      </Navigation>
    </SidebarWrapper>
  )
};

export default Sidebar;

const SidebarWrapper = styled.div`
  align-self: stretch;
  flex-basis: 250px;
  min-height: 100vh;
  background: var(--purple-gradient);
  text-align: center;

  & .logo {
    width: 50px;
    height: 50px;
  }

  & a.active {
    color: yellow;
  }
`;

const Navigation = styled.nav`
  margin: 40px 0;
`;

const LinkWrapper = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: red;
  }
`;