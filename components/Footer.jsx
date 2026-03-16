import React from 'react';

export default function Footer({ location, year, author, link }) {
  const footerStyle = {
    fontFamily: '"Book Antiqua", serif',
    fontSize: '0.9rem',
    textAlign: 'right',
    opacity: 0.8
  };

  return (
    <div style={footerStyle}>
      <em>
        {location} &middot; {year} ©{' '}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {author}
        </a>
      </em>
    </div>
  );
}
