import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import GlobalStyles from '../src/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import main from '../src/theme/defaultTheme';

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={main}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
