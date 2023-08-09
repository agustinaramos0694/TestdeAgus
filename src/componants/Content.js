import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import '../Styles/Styles.css'
function Content() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`content-${theme}`}>
      <p>Contenido de la aplicación</p>
    </div>
  );
};

export default Content;