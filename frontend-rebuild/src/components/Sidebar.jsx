import styled from 'styled-components';

import { logo } from '../assets/images';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <img className='logo' src={logo} alt='logo' />
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