import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SnippetDetailsPage from './pages/SnippetDetailsPage';
import AddEditSnippetPage from './pages/AddEditSnippetPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/snippet/:id" element={<SnippetDetailsPage />} />
            <Route path="/add" element={<AddEditSnippetPage />} />
            <Route path="/edit/:id" element={<AddEditSnippetPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
