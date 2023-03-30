import styled from 'styled-components';

import MenuButton from '../ui/MenuButton';

import { logo } from '../assets/images';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <img className='logo' src={logo} alt='logo' />
      <Navigation>
        <MenuButton label='My Cloud' icon='faWindowMaximize' />
        <MenuButton label='Shared Files' icon='faWindowMaximize' />
        <MenuButton label='Images' icon='faWindowMaximize' />
      </Navigation>
    </SidebarWrapper>
  )
};

export default Sidebar;

const SidebarWrapper = styled.div`
  flex-basis: 250px;
  padding: 10px;
  background: var(--dark);
  text-align: center;

  & .logo {
    width: 50px;
    height: 50px;
  }
`;

const Navigation = styled.nav`
  margin: 40px 0;
`;