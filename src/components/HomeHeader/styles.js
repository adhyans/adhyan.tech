import styled from 'styled-components';
import AdhyanTech from '../../icons/AdhyanTech';

export const StyledLogo = styled(AdhyanTech)`
  cursor: pointer;
  padding-bottom: 1rem;
  border-bottom: 0.7rem solid #bc6565;

  @media (max-width: 60rem) {
    width: 12rem;
    padding-bottom: 0.6rem;
    border-bottom: 0.4rem solid #bc6565;
  }
`;

export const HeaderWrapper = styled.div``;
