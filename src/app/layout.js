import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      <footer> &copy; 2023 Paul C Crescini</footer>
      </body>
    </html>
  );
}

export default RootLayout;
