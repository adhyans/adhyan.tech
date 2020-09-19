import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export default ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => {
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => {
                  if (token.empty) {
                    return false;
                  }
                  return <span key={key} {...getTokenProps({ token, key })} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};
