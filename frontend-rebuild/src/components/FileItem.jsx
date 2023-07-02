import styled from 'styled-components';
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../constants';

import IconButton from '../ui/IconButton';

const FileItem = ({
  id,
  file,
  selected,
  selectFile,
  toggleSidebarInfo,
}) => {
	const [{isDragging}, drag] = useDrag(() => ({
		type: ItemTypes.FILE,
		collect: (monitor => ({
			isDragging: !!monitor.isDragging()
		}))
	}))

  const toggleInfo = (event) => {
    console.log('click in tgw info');
    event.stopPropagation();
    toggleSidebarInfo();
  }

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <FileItemWrapper onClick={() => selectFile(id)} $isDragging={isDragging}>
        <FileContentWrapper $selected={selected}>
          <IconButton icon={file.type} size='large' background={false} active={true} />
          <IconButton icon='faEllipsisVertical' onClick={toggleInfo} />
        </FileContentWrapper>
        <FooterWrapper $selected={selected}>{file.size}</FooterWrapper>
      </FileItemWrapper>
    </div>
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
  margin-right: 10px;
  opacity: ${({$isDragging}) => $isDragging ? '0.5' : '1'}
`;

const FileContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  padding: 10px;
  padding-bottom: 0;
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