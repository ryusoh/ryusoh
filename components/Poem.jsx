import React from 'react';

export default function Poem({ children }) {
  return (
    <div style={{
      fontFamily: '"Book Antiqua", serif',
      fontSize: '1rem',
      lineHeight: '1.3',
      paddingLeft: '1rem',
      margin: '2rem 0',
    }}>
      {children}
    </div>
  );
}
