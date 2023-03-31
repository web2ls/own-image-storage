import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const iconsPack = {
  faWindowMaximize,
  faSquarePlus,
};

const IconButton = ({ icon, label = null }) => {
  return (
    <IconButtonWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={iconsPack[icon]} />
      </IconWrapper>
      {label}
    </IconButtonWrapper>
  )
};

export default IconButton;

const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: var(--gray);
  border-radius: 50%;
  color: var(--purple);
`;