import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('es');

  function handleLanguageChange  (newLanguage)  {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <h1>{language === 'es' ? 'Bienvenido' : 'Welcome'}</h1>
      <p>{language === 'es' ? 'Seleccione su idioma:' : 'Select your language:'}</p>
      <div>
        <button onClick={() => handleLanguageChange('es')}>Español</button>
        <button onClick={() => handleLanguageChange('en')}>English</button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;