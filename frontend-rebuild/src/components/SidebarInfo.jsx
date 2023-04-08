import styled from 'styled-components';

const SidebarInfo = () => {
  return (
    <SidebarInfoWrapper>Sidebar information</SidebarInfoWrapper>
  )
};

export default SidebarInfo;

const SidebarInfoWrapper = styled.div`
  flex-basis: 300px;
  align-self: stretch;
  background: var(--white);
  color: var(--black);
  transition: all 600;
`;