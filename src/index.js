import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';

import Style from './GlobalStyle/style';
// TODO: light and dark themes
import Theme from './GlobalStyle/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Style />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
