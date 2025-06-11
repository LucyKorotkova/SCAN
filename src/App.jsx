import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import Results from './pages/Results';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={
              <PrivateRoute>
                <Search />
              </PrivateRoute>
            } />
            <Route path="/results" element={
              <PrivateRoute>
                <Results />
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const isAuth = !!localStorage.getItem('accessToken');
  return isAuth ? children : <Navigate to="/login" />;
}

export default App;