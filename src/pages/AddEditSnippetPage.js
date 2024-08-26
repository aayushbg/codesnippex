import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddEditSnippetPage = ({ snippets, addSnippet, editSnippet }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [snippet, setSnippet] = useState({ title: '', description: '', code: '' });

  useEffect(() => {
    if (id) {
      const existingSnippet = snippets.find(s => s.id === parseInt(id));
      if (existingSnippet) {
        setSnippet(existingSnippet);
      }
    }
  }, [id, snippets]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editSnippet(parseInt(id), snippet);
    } else {
      addSnippet(snippet);
    }
    navigate('/');
  };

  const handleChange = (e) => {
    setSnippet({ ...snippet, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="snippet-form">
      <h2>{id ? 'Edit Snippet' : 'Add Snippet'}</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={snippet.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={snippet.description}
        onChange={handleChange}
        required
      ></textarea>
      <textarea
        name="code"
        placeholder="Code"
        value={snippet.code}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">{id ? 'Update' : 'Add'} Snippet</button>
    </form>
  );
};

export default AddEditSnippetPage;