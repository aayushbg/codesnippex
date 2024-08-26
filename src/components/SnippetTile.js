import React from 'react';
import { Link } from 'react-router-dom';

const SnippetTile = ({ snippet, updatePopularity }) => {
  const handleVote = (e, voteType) => {
    e.preventDefault(); // Prevent navigation to snippet details
    updatePopularity(snippet.id, voteType);
  };

  return (
    <div className="snippet-tile">
      <div className="vote-buttons">
        <button onClick={(e) => handleVote(e, 'upvote')} className="vote-button upvote">▲</button>
        <button onClick={(e) => handleVote(e, 'downvote')} className="vote-button downvote">▼</button>
      </div>
      <Link to={`/snippet/${snippet.id}`} className="snippet-content">
        <h3>{snippet.title}</h3>
        <p>{snippet.description.substring(0, 50)}...</p>
        <span className="popularity">Popularity: {snippet.popularity}</span>
      </Link>
    </div>
  );
};

export default SnippetTile;
