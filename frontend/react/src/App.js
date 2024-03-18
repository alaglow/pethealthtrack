import { useState } from "react";
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/topbar';
import Dashboard from './scenes/dashboard/dashboard';
import Sidebar from './scenes/global/sidebar';
import Calendar from './scenes/calendar/calendar';
import Bar from './scenes/bar/index';
import PieChart from './scenes/pie/index';

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />

          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/healthpanel' element={<Bar />} />
              <Route path='/settings' element={<PieChart />} />
            </Routes>

          </main>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}

export default App;
