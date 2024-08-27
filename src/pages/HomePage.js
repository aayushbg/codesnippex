import React, { useState, useEffect } from 'react';
import SnippetList from '../components/SnippetList';
import api from '../utils/api';

const HomePage = () => {
  const [snippets, setSnippets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = async () => {
    try {
      const res = await api.get('/snippets');
      setSnippets(res.data);
    } catch (error) {
      console.error('Error fetching snippets:', error);
    }
  };

  const handleVote = (updatedSnippet) => {
    setSnippets(snippets.map(snippet => 
      snippet._id === updatedSnippet._id ? updatedSnippet : snippet
    ));
  };

  const filteredSnippets = snippets.filter(snippet =>
    snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* <h1>Code Snippets</h1> */}
      <div className='totalbar'>
        <input
          type="text"
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchbar"
        />
        <button type="submit" className='searchbarbtn'>Search</button>
      </div>
      <SnippetList snippets={filteredSnippets} onVote={handleVote} />
    </div>
  );
};

export default HomePage;