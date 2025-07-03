import React from 'react';
import './App.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import DashBoard from './features/features/components/dashboard/Dashboard';
import AppLayout from './features/layout/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './features/features/components/movies/Movies';
import MovieInfo from './features/features/components/movies/MovieInfo';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Header /> */}
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/home" element={<DashBoard />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/film/:id" element={<MovieInfo />} />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
