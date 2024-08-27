import React from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

const SnippetItem = ({ snippet, onVote }) => {
  const handleVote = async (voteType) => {
    try {
      const res = await api.put(`/snippets/${snippet._id}/vote`, { voteType });
      onVote(res.data);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className="snippet-item">
      <h3>{snippet.title}</h3>
      <p>{snippet.description.substring(0, 25)}...</p>
      <p>Language: {snippet.language}</p>
      <p>Popularity: {snippet.popularity}</p>
      <div className= "vote-buttons">
        <button onClick={() => handleVote('upvote')} className="vote-button upvote">▲</button>
        <button onClick={() => handleVote('downvote')} className="vote-button downvote">▼</button>
      </div>
      <div className='vwsnpt'>
        <Link to={`/snippet/${snippet._id}`}>View Snippet</Link>
      </div>
    </div>
  );
};

export default SnippetItem;
