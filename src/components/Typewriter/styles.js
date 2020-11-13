import styled, { keyframes, css } from 'styled-components';

export const TypewriterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8rem;

  h1 {
    font-size: 5.6rem;

    @media (max-width: 60rem) {
      font-size: 2.4rem;
    }
  }

  span {
    color: ${({ spanColor }) => (spanColor ? spanColor : '#FFF')};
  }

  .closing-brace {
    margin-left: 1.4rem;

    @media (max-width: 60rem) {
      margin-left: 0.7rem;
    }
  }

  .vertical-block {
    width: 0.8rem;
    margin-left: 0.5rem;
    animation: ${({ verticalBlockColor }) =>
      verticalBlockColor
        ? css`
            ${Blink(verticalBlockColor)} 0.8s infinite
          `
        : ''};
    @media (max-width: 60rem) {
      width: 0.4rem;
    }
  }

  @media (max-width: 60rem) {
    padding-top: 4rem;
  }
`;

const Blink = color => keyframes`  
  0% {
    background-color: ${color}
  }
  49% {
    background-color: ${color}
  }
  60% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: ${color}
  }
`;
