import styled from 'styled-components';

export const FooterWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name-block {
    display: flex;

    p {
      cursor: pointer;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.6rem;
      margin-left: 1rem;
    }
  }

  .social-sharing {
    .social-icon {
      margin-left: 1rem;
      cursor: pointer;
    }
  }
`;
