import React, { useState } from 'react';
import SnippetTile from '../components/SnippetTile';
import SearchBar from '../components/SearchBar';

const HomePage = ({ snippets, updatePopularity }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredSnippets = snippets
    .filter(snippet => snippet.title.toLowerCase().includes(searchTerm))
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <div className="snippet-grid">
        {filteredSnippets.map(snippet => (
          <SnippetTile key={snippet.id} snippet={snippet} updatePopularity={updatePopularity} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;