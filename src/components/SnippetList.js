import React from 'react';
import SnippetItem from './SnippetItem';

const SnippetList = ({ snippets, onVote }) => {
  return (
    <div className="snippet-list">
      {snippets.map((snippet) => (
        <SnippetItem key={snippet._id} snippet={snippet} onVote={onVote} />
      ))}
    </div>
  );
};

export default SnippetList;