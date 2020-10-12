import styled from 'styled-components';
import AdhyanTech from '../../icons/AdhyanTech';

export const HeaderWrapper = styled.div`
  background: #bc6565;
  padding-top: 0.1rem;
  /* added due to margin collapse on child element */

  .content {
    max-width: 100rem;
    margin: auto;
    margin-top: 2rem;

    nav {
      display: flex;
      justify-content: space-between;

      .nav-links {
        color: white;
        font-weight: bold;
        li {
          font-size: 2.4rem;
          list-style: none;
          cursor: pointer;
        }
      }
    }

    @media (max-width: 60rem) {
      margin-left: 2rem;
      margin-left: 2rem;
    }
  }
`;

export const HeaderText = styled.div`
  margin-top: 5rem;

  h1 {
    font-size: 4.4rem;
    line-height: 120%;
    font-weight: bold;

    @media (max-width: 60rem) {
      font-size: 2.4rem;
    }
  }
`;

export const StyledLogo = styled(AdhyanTech)`
  cursor: pointer;
  @media (max-width: 60rem) {
    width: 12rem;
  }
`;

export const MetaInfoWrapper = styled.div`
  margin-top: 2rem;
  padding-bottom: 2.2rem;
  display: flex;

  .date-published {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 3.4rem;
    padding: 0;
    margin: 0;

    @media (max-width: 60rem) {
      font-size: 1.4rem;
    }
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Tag = styled.div`
  padding: 0 1rem;
  background: white;
  margin-left: ${({ ml }) => (ml ? '1.2rem' : '0')};
  text-align: center;
  border-radius: 1.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 3rem;
  border: 2px solid black;

  p {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 60rem) {
    padding: 0 1rem;
    font-size: 1.4rem;
    line-height: 2.5rem;
    margin-left: ${({ ml }) => (ml ? '1rem' : '0')};
  }
`;
