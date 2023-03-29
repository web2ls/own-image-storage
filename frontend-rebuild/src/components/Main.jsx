import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path='/' element={<div>Content</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </MainWrapper>
  )
};

export default Main;

const MainWrapper = styled.main`
  flex: 1;
  background: var(--gray);
`;