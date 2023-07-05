import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider, jssPreset } from '@material-ui/styles';
import React from 'react'
import IndexScreen from './screens/index'
import { theme } from './theme/theme'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { getDirections } from './localization/index'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
function App() {
  return getDirections() === "ltr" ? (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <IndexScreen />
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <IndexScreen />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
