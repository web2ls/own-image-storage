import styled from 'styled-components';

import IconButton from '../ui/IconButton';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <IconButton icon='faSquarePlus' label='Add files' active={true} size='medium' background={true} />
      </div>
      <div>
        <UserAvatar />
      </div>
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
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%);
`;