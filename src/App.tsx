import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './features/authentication/context/AuthContext';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;