import React from 'react';

export default function ImageFrame({ src, alt }) {
  return (
    <div style={{ margin: '2rem 0' }}>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '4px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          display: 'block'
        }}
      />
    </div>
  );
}
