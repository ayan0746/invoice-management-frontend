import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Login from './pages/Login';
import AdminPortal from './pages/AdminPortal';
import UserPortal from './pages/UserPortal';
import NotFound from './pages/NotFound';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/user" element={<UserPortal />} />
          {/* Fallback route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
