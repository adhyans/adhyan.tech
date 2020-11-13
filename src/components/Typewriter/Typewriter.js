import React, { useState, useRef, useEffect } from 'react';
import { TypewriterWrapper } from './styles';

Typewriter.propTypes = {};

const timeInMs = 100;

function Typewriter() {
  const colors = ['#451f55', '#f8c630', '#457b9d'];
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  const spanNode = useRef(null);

  useEffect(() => {
    const array = ['webpack', 'node', 'npm'];
    let timer;
    for (let i = 0; i < array[currentTopicIndex].length; i++) {
      timer = setTimeout(function() {
        let alreadyExistingText = spanNode.current.textContent;
        alreadyExistingText += array[currentTopicIndex][i];
        spanNode.current.textContent = alreadyExistingText;
        if (i === array[currentTopicIndex].length - 1) {
          setTimeout(() => {
            spanNode.current.textContent = '';
            setCurrentTopicIndex((currentTopicIndex + 1) % array.length);
          }, 1000);
        }
      }, timeInMs * (i + 1));
    }

    return () => clearTimeout(timer);
  }, [currentTopicIndex]);

  return (
    <TypewriterWrapper
      spanColor={colors[currentTopicIndex]}
      verticalBlockColor={colors[(currentTopicIndex + 1) % colors.length]}
    >
      <h1 className="text">
        adhyan.tech(<span ref={spanNode}></span>
      </h1>
      <div className="vertical-block">
        <h1 className="closing-brace">)</h1>
      </div>
    </TypewriterWrapper>
  );
}

export default Typewriter;
