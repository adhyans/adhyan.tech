import styled from 'styled-components';
import AdhyanTech from '../../icons/AdhyanTech';

export const StyledLogo = styled(AdhyanTech)`
  cursor: pointer;
  padding-bottom: 1rem;
  margin: 3rem 0 0 3rem;

  @media (max-width: 60rem) {
    width: 12rem;
    padding-bottom: 0.6rem;
    visibility: hidden;
  }
`;

export const HeaderWrapper = styled.div`
  background: black;
  color: white;
  height: 32rem;

  @media (max-width: 60rem) {
    height: 24rem;
  }
`;
