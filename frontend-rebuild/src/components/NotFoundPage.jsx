import styled from 'styled-components';

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      OOOPS! Page not found... sadness
    </NotFoundPageWrapper>
  )
};

export default NotFoundPage;

const NotFoundPageWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: var(--black);
  font-size: 18px;
  line-height: 36px;
  font-weight: 700;
`;