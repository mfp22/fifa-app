import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/global';
import Home from 'pages/home';

import dark from 'themes/dark';

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
