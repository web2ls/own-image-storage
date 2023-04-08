import styled from 'styled-components';

import IconButton from '../ui/IconButton';

const FileItem = ({ file, selected, selectFile, toggleSidebarInfo }) => {
  const toggleInfo = (event) => {
    console.log('click in tgw info');
    event.stopPropagation();
    toggleSidebarInfo();
  }

  return (
    <FileItemWrapper onClick={() => selectFile(file.id)}>
      <FileContentWrapper $selected={selected}>
        <IconButton icon={file.type} size='large' background={false} active={true} />
        <IconButton icon='faEllipsisVertical' onClick={toggleInfo} />
      </FileContentWrapper>
      <FooterWrapper $selected={selected}>123.3 MB</FooterWrapper>
    </FileItemWrapper>
  )
};

export default FileItem;

const FileItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  margin-bottom: 40px;
  background: var(--white);
  border-radius: 20px;
  gap: 10px;
`;

const FileContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  padding: 10px;
  border-radius: 20px 20px 0 0;
  border: ${props => props.$selected ? '3px solid var(--purple)' : '3px solid var(--white)'};
  border-bottom: none;
  transition: all 0.3s;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px;
  align-self: flex-end;
  background: var(--dark-gray);
  border-radius: 0 0 17px 17px;
  border: ${props => props.$selected ? '3px solid var(--purple)' : '3px solid var(--dark-gray)'};
  border-top: none;
  transition: all 0.3s;
`;