import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const SnippetDetailsPage = () => {
  const [snippet, setSnippet] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetchSnippet();
  }, [id]);

  const fetchSnippet = async () => {
    try {
      const res = await api.get(`/snippets/${id}`);
      setSnippet(res.data);
    } catch (error) {
      console.error('Error fetching snippet:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/snippets/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting snippet:', error);
    }
  };

  if (!snippet) return <div>Loading...</div>;

  return (
    <div className='snipouter'>
      <h2 className='sniptitle'>{snippet.title}</h2>
      <p className='snipdesc'>{snippet.description}</p>
      <pre className='snippre'><code className='snipcode'>{snippet.code}</code></pre>
      <p className='sniplang'>Language: {snippet.language}</p>
      <p className='snippopularity'>Popularity: {snippet.popularity}</p>
      {user && user._id === snippet.user && (
        <div className='snipchanger'>
          <Link className='snipedit' to={`/edit/${snippet._id}`}>Edit</Link>
          <button className='snipdelete' onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default SnippetDetailsPage;