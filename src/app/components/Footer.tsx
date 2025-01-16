import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear() - 1} Shortest Path Consulting</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#2C2F3A',
  color: '#fff',
  position: 'fixed',
  zIndex: '-1',
  bottom: 0,
  width: '100%',
  height: '2.5rem',
};

export default Footer;