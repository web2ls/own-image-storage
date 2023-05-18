import styled from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import AuthGuard from './AuthGuard';

function Layout() {
  return (
    <AuthGuard>
      <LayoutWrapper>
        <Sidebar />
        <ContentWrapper>
          <Header />
          <Main />
        </ContentWrapper>
      </LayoutWrapper>
    </AuthGuard>
  )
}

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 1280px; */
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;
