import styled from 'styled-components';

function Layout() {
  return (
    <LayoutWrapper>
      <div className="sidebar">Sidebar</div>
      <div>
        <header>Header</header>
        <main>Main section content</main>
      </div>
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

  & .sidebar {
    flex-basis: 300px;
  }

  & main {
    flex: 1;
  }
`;
