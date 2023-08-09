
import React, { useState } from 'react';
import ThemeContext from './Context/ThemeContext';
import Header from './componants/Header';
import Content from './componants/Content';
import LoginForm from './ValitacionForm/LoginForm';
import RegistrationForm from './ValitacionForm/RegistrationForm ';
import ImageGallery from './Practica/ImageGallery';
import LanguageSwitcher from './Practica/LanguageSwitcher ';
function App () {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  function handlerSubmit (event) {


  }
  return (
    // <ThemeContext.Provider value={theme}>
    //   <div className={`app-${theme}`}>
    //     <Header />
    //     <Content />

    //   </div>
    //   <button onClick={toggleTheme}>Toggle Theme</button>
    // </ThemeContext.Provider>
  //  <ImageGallery></ImageGallery>
  <LanguageSwitcher></LanguageSwitcher>
  );
};

export default App;