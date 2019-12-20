import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import main from './theme/defaultTheme';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
