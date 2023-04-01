import { useState } from 'react';
import styled from 'styled-components';

import FileItem from "./FileItem";

const data = [
  {
    id: 1,
    name: 'file1',
    createdAt: new Date().getTime(),
  },
  {
    id: 2,
    name: 'file2',
    createdAt: new Date().getTime(),
  },
  {
    id: 3,
    name: 'file3',
    createdAt: new Date().getTime(),
  },
  {
    id: 4,
    name: 'file4',
    createdAt: new Date().getTime(),
  },
]

const FilesList = () => {
  const [files, setFiles] = useState(data);
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