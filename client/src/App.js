import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import main from './theme/defaultTheme';
import GlobalStyles from './GlobalStyles';
import Map from './components/Map/Map';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Map />
    </ThemeProvider>
  );
}

export default App;
