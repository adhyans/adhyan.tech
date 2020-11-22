import React from 'react';

const Codesandbox = ({ sandboxurl, title }) => (
  <div className="video">
    <iframe
      src={sandboxurl}
      style={{
        width: '100%',
        height: '600px',
        border: 0,
        'border-radius': '4px',
        overflow: 'hidden',
      }}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  </div>
);

export default Codesandbox;
