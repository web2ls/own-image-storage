import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowMaximize,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import {
  faEllipsisVertical,
  faFileWord,
  faFileExcel,
  faFileVideo,
  faFileAudio,
  faFilePdf,
  faFileZipper,
  faFileImage,
  faFileCircleQuestion,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

const iconsPack = {
  faWindowMaximize,
  faSquarePlus,
  faEllipsisVertical,
  'word': faFileWord,
  'excel': faFileExcel,
  'video': faFileVideo,
  'audio': faFileAudio,
  'pdf': faFilePdf,
  'archive': faFileZipper,
  'jpeg': faFileImage,
  'jpg': faFileImage,
  'png': faFileImage,
  'file': faFileCircleQuestion,
  'folder': faFolder
};

const IconButton = ({ icon, size = 'small', label = null, active = false, background = false }) => {
  return (
    <IconButtonWrapper>
      <IconWrapper $background={background} className={size} $active={active}>
        <FontAwesomeIcon className={size} icon={iconsPack[icon]} />
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

  & svg.small {
    width: 15px;
    height: 15px;
  }

  & svg.medium {
    width: 25px;
    height: 25px;
  }

  & svg.large {
    width: 35px;
    height: 35px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: ${({ $background }) => $background ? 'var(--gray)' : 'transparent'};
  border-radius: 50%;
  color: ${({ $active }) => $active ? 'var(--purple)' : 'var(--dark-gray)'};

  &.small {
    width: 25px;
    height: 25px;
  }

  &.medium {
    width: 35px;
    height: 35px;
  }

  &.large {
    width: 50px;
    height: 50px;
  }
`;