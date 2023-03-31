import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

const iconsPack = {
  faWindowMaximize
};

const MenuButton = ({ label, active, icon = null }) => {
  return (
    <MenuButtonWrapper className={active ? 'active' : ''}>
      {icon && <IconWrapper icon={iconsPack[icon]} />}
      <span>{label}</span>
    </MenuButtonWrapper>
  )
};

export default MenuButton;

const MenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  margin: 20px 0;
  cursor: pointer;
  text-align: left;
  color: var(--white);
  transition: all 0.3s;

  &:hover {
    background: #473080;
    border-radius: 10px;
  }

  &.active {
    background: #473080;
    border-radius: 10px;
  }
`;

const IconWrapper = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: var(--gray);
`;