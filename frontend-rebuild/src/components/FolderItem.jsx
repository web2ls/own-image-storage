import { useRef } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../constants';

import IconButton from '../ui/IconButton';

const FolderItem = ({
  id,
  file,
  selected,
  selectFile,
  toggleSidebarInfo,
  moveFile,
}) => {
  const ref = useRef(null);

  const [{handlerId}, connectDrop] = useDrop(() => ({
    accept: ItemTypes.FOLDER,
    drop({id: draggetId}) {
      console.log('drop it');

      if (draggetId !== id) {
        moveFile(draggetId, id);
      }
    }
  }))

  connectDrop(ref);

  const toggleInfo = (event) => {
    console.log('click in tgw info');
    event.stopPropagation();
    toggleSidebarInfo();
  }

  return (
      <div
        ref={ref}
        data-handler-id={handlerId}
      >
        <FolderItemWrapper onClick={() => selectFile(id)}>
          <FolderContentWrapper $selected={selected}>
            <IconButton icon={file.type} size='large' background={false} active={true} />
            <IconButton icon='faEllipsisVertical' onClick={toggleInfo} />
          </FolderContentWrapper>
          <FooterWrapper $selected={selected}>{file.size}</FooterWrapper>
        </FolderItemWrapper>
      </div>
  )
};

export default FolderItem;

const FolderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  margin-bottom: 40px;
  background: var(--white);
  border-radius: 20px;
  margin-right: 10px;
  opacity: ${({$isDragging}) => $isDragging ? '0.5' : '1'};
  background: ${({$isOver}) => $isOver ? 'purple' : 'var(--white)'};
`;

const FolderContentWrapper = styled.div`
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