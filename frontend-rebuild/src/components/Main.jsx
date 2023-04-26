import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";

import FilesList from './FilesList';
import ImagesList from './ImagesList';
import SharedFilesList from './SharedFilesList';
import Upload from './Upload';

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path='/' element={<FilesList />} />
          <Route path='images' element={<ImagesList />} />
          <Route path='shared' element={<SharedFilesList />} />
          <Route path='upload' element={<Upload />} />
          <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </MainWrapper>
  )
};

export default Main;

const MainWrapper = styled.main`
  flex: 1;
  height: calc(100% - 60px);
  padding-bottom: 40px;
`;