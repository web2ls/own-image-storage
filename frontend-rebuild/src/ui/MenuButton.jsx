import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

const iconsPack = {
  faWindowMaximize
};

const MenuButton = ({ label, icon = null }) => {
  return (
    <MenuButtonWrapper>
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
  border-radius: 10px;
  padding: 0 10px;
  margin: 20px 0;
  cursor: pointer;
  text-align: left;
  color: var(--white);
  background: #473080;
`;

const IconWrapper = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: var(--gray);
`;

/*
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)

# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons


*/