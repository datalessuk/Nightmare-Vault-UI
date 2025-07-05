import React from 'react';
import './App.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import DashBoard from './features/features/components/dashboard/Dashboard';
import AppLayout from './features/layout/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './features/features/components/movies/Movies';
import MovieInfo from './features/features/components/movies/MovieInfo';
import SignUp from './features/features/components/signup/SignUp';
import PrivateRoute from '../src/features/layout/PrivateRoute';
import WatchList from './features/features/components/watchlist/WatchList';
import Login from './features/features/components/login/Login';
import { AuthProvider } from './lib/AuthContext';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <Toaster />
        <Router>
          <AppLayout>
            <Routes>
              <Route path="/home" element={<DashBoard />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/film/:id" element={<MovieInfo />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/watchlist"
                element={
                  <PrivateRoute>
                    <WatchList />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AppLayout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
