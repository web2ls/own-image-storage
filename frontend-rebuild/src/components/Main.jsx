import styled from 'styled-components';
import { Routes, Route, Navigate } from "react-router-dom";

import FilesList from './FilesList';
import ImagesList from './ImagesList';
import SharedFilesList from './SharedFilesList';
import Upload from './Upload';
import NotFoundPage from './NotFoundPage';

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path='/' element={<Navigate to='/cloud' />} />
        <Route path='/cloud' element={<FilesList />} />
          <Route path='images' element={<ImagesList />} />
          <Route path='shared' element={<SharedFilesList />} />
          <Route path='upload' element={<Upload />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainWrapper>
  )
};

export default Main;

const MainWrapper = styled.main`
  flex: 1;
`;