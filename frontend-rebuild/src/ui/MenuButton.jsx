import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

const iconsPack = {
  faWindowMaximize
};

const MenuButton = ({ label, active, icon = null, alignLabel = 'left', onClick }) => {
  return (
    <MenuButtonWrapper
      className={active ? 'active' : ''}
      $alignLabel={alignLabel}
      onClick={onClick ? onClick : undefined}>
      {icon && <IconWrapper icon={iconsPack[icon]} />}
      <span>{label}</span>
    </MenuButtonWrapper>
  )
};

export default MenuButton;

const MenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({$alignLabel}) => $alignLabel === 'left' ? 'flex-start' : $alignLabel === 'right' ? 'flex-end' : 'center'};
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  cursor: pointer;
  color: var(--white);
  transition: all 0.4s;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background: var(--purple-gradient);
    filter: grayscale(50%);
  }

  &.active {
    background: var(--purple-gradient);
  }
`;

const IconWrapper = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: var(--gray);
`;