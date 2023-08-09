import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

function Header () {
  const theme = useContext(ThemeContext);

  return (
    <header className={`header-${theme}`}>
      <h1>My App</h1>
    </header>
  );
};

export default Header;