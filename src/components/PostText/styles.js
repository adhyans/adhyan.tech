import styled from 'styled-components';

export const PostTextWrapper = styled.div`
  margin-top: 5rem;

  p {
    padding: 0;
    font-size: 2.4rem;
    line-height: 150%;
    margin: 1rem 0 1rem 0;

    @media (max-width: 60rem) {
      font-size: 1.8rem;
    }
  }

  ol {
    font-size: 2.4rem;
    line-height: 150%;
    @media (max-width: 60rem) {
      font-size: 1.8rem;
    }
  }

  ul {
    font-size: 2.4rem;

    line-height: 150%;
    @media (max-width: 60rem) {
      font-size: 1.8rem;
    }
  }

  h3 {
    margin: 4rem 0 2.4rem 0;
    font-size: 3.2rem;
    font-weight: bold;
    padding: 0;

    @media (max-width: 60rem) {
      font-size: 2.2rem;
    }
  }

  pre {
    @media (max-width: 60rem) {
      font-size: 1.8rem;
    }
  }
`;
