import styled from 'styled-components';

export const PostTextWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;

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

  h4 {
    margin: 4rem 0 2.4rem 0;
    font-size: 2.8rem;
    font-weight: bold;
    padding: 0;

    @media (max-width: 60rem) {
      font-size: 2rem;
    }
  }

  pre {
    overflow-x: scroll;
    margin-top: 4rem;
    margin-bottom: 4rem;
    @media (max-width: 60rem) {
      font-size: 1.8rem;
    }
  }

  p > span > a {
    margin-top: 4rem !important;
    margin-bottom: 4rem !important;
  }

  iframe {
    width: 100%;
    text-align: center;
    @media (max-width: 60rem) {
      height: 20rem;
    }
  }
`;
