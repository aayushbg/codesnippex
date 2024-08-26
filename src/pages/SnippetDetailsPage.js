import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const SnippetDetailsPage = ({ snippets, removeSnippet }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const snippet = snippets.find(s => s.id === parseInt(id));

  if (!snippet) {
    return <div>Snippet not found</div>;
  }

  const handleDelete = () => {
    removeSnippet(snippet.id);
    navigate('/');
  };

  return (
    <div className="snippet-details">
      <h2>{snippet.title}</h2>
      <p>{snippet.description}</p>
      <pre><code>{snippet.code}</code></pre>
      <div className="snippet-actions">
        <Link to={`/edit/${snippet.id}`} className="edit-button">Edit</Link>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default SnippetDetailsPage;