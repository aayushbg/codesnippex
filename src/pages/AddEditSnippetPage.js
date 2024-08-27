import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SnippetForm from '../components/SnippetForm';
import api from '../utils/api';

const AddEditSnippetPage = () => {
  const [snippet, setSnippet] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchSnippet();
    }
  }, [id]);

  const fetchSnippet = async () => {
    try {
      const res = await api.get(`/snippets/${id}`);
      setSnippet(res.data);
    } catch (error) {
      console.error('Error fetching snippet:', error);
    }
  };

  const handleSubmit = async (data) => {
    try {
      if (id) {
        await api.put(`/snippets/${id}`, data);
      } else {
        await api.post('/snippets', data);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving snippet:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit' : 'Add'} Snippet</h2>
      <SnippetForm onSubmit={handleSubmit} initialData={snippet} />
    </div>
  );
};

export default AddEditSnippetPage;