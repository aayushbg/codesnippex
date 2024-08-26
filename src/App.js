import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SnippetDetailsPage from './pages/SnippetDetailsPage';
import AddEditSnippetPage from './pages/AddEditSnippetPage';

const App = () => {
  const [snippets, setSnippets] = useState([]);

  const addSnippet = (newSnippet) => {
    setSnippets([...snippets, { ...newSnippet, id: Date.now(), popularity: 0 }]);
  };

  const editSnippet = (id, updatedSnippet) => {
    setSnippets(snippets.map(snippet => snippet.id === id ? { ...snippet, ...updatedSnippet } : snippet));
  };

  const removeSnippet = (id) => {
    setSnippets(snippets.filter(snippet => snippet.id !== id));
  };

  const updatePopularity = (id, voteType) => {
    setSnippets(snippets.map(snippet => 
      snippet.id === id 
        ? { ...snippet, popularity: snippet.popularity + (voteType === 'upvote' ? 1 : -1) } 
        : snippet
    ));
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage snippets={snippets} updatePopularity={updatePopularity} />} />
        <Route path="/snippet/:id" element={<SnippetDetailsPage snippets={snippets} removeSnippet={removeSnippet} />} />
        <Route path="/add" element={<AddEditSnippetPage addSnippet={addSnippet} />} />
        <Route path="/edit/:id" element={<AddEditSnippetPage snippets={snippets} editSnippet={editSnippet} />} />
      </Routes>
    </div>
  );
};

export default App;