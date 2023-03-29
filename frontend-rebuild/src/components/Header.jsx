import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>Upload section</div>
      <div>Logo section</div>
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