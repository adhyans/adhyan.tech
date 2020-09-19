import styled from 'styled-components';
import AdhyanTech from '../../icons/AdhyanTech';

export const HeaderWrapper = styled.div`
  background: #bc6565;
  padding-top: 0.1rem;
  /* added due to margin collapse on child element */

  .content {
    margin: 2rem 25% 0 25%;

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
  }
`;

export const HeaderText = styled.div`
  width: 95%;
  margin-top: 5rem;

  h1 {
    font-size: 4.4rem;
    line-height: 120%;
    width: 90%;
    font-weight: bold;
  }
`;

export const StyledLogo = styled(AdhyanTech)`
  cursor: pointer;
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
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Tag = styled.div`
  width: 6rem;
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
`;
