import { useState } from 'react';
import styled from 'styled-components';

import FileItem from "./FileItem";

import { MOCK_FILES_LIST } from '../constants';

const FilesList = () => {
  const [files, setFiles] = useState(MOCK_FILES_LIST);
  const [selectedFileId, setSelectedFileId] = useState(null);

  const selectFile = (id) => {
    console.log('select file', id);
    setSelectedFileId(id);
  }

  return (
    <div>
      <Header>My cloud</Header>
      <ListWrapper>
        {files.map(file => (
          <FileItem key={file.id} file={file} selected={file.id === selectedFileId} selectFile={selectFile} />
        ))}
      </ListWrapper>
    </div>
  )
};

export default FilesList;

const Header = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 700;
  color: var(--black);
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;