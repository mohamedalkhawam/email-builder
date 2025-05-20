import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './App/index';
import theme from './theme';
import type { EmailBuilderProps } from './types';

export default function Main({ text }: EmailBuilderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>{text}</div>
      <App />
    </ThemeProvider>
  );
}
