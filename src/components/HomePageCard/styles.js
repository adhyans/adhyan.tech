import styled from 'styled-components';

export const CardWrapper = styled.div`
  text-decoration: none;

  a {
    text-decoration: none;
  }

  h2 {
    font-size: 2.4rem;
    text-decoration: underline;
    cursor: pointer;
    color: black;

    @media (max-width: 60rem) {
      font-size: 2rem;
    }
  }

  p {
    color: black;
    font-size: 1.8rem;
    line-height: 160%;

    @media (max-width: 60rem) {
      font-size: 1.6rem;
    }
  }

  .read-more {
    color: #bc6565;
    text-decoration: none;
    font-weight: bold;
  }
`;
