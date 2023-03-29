import styled from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';

function Layout() {
  return (
    <LayoutWrapper>
      <Sidebar />
      <ContentWrapper>
        <Header />
        <Main />
      </ContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;
