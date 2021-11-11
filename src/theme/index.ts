import { responsiveFontSizes } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette,
  typography,
});

const ThemeConfig = responsiveFontSizes(theme, {});

export default ThemeConfig;
