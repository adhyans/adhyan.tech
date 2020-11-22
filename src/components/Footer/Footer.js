import React from 'react';
import PropTypes from 'prop-types';
import Copyright from '../../icons/Copyright';
import Twitter from '../../icons/Twitter';
import Github from '../../icons/Github';
import Linkedin from '../../icons/Linkedin';
import { FooterWrapper } from './styles';

Footer.propTypes = {};

function Footer() {
  function onClickHandle(link) {
    return function() {
      window.open(link);
    };
  }

  return (
    <FooterWrapper>
      <div className="name-block">
        <Copyright width="20" height="20" />
        <p className="name" onClick={onClickHandle('https://adhyan.tech')}>
          Adhyan Srivastava
        </p>
      </div>
      <div className="social-sharing">
        <Twitter
          width="28"
          height="28"
          className="social-icon"
          onClick={onClickHandle('https://twitter.com/tech_adhyan')}
        />
        <Github
          width="28"
          height="28"
          className="social-icon"
          onClick={onClickHandle('https://github.com/adhyans')}
        />
        <Linkedin
          width="28"
          height="28"
          className="social-icon"
          onClick={onClickHandle('https://www.linkedin.com/in/adhyan/')}
        />
      </div>
    </FooterWrapper>
  );
}

export default Footer;
