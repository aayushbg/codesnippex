import React from 'react';
import { Link } from 'react-router-dom';

const AddSnippetButton = () => {
  return (
    <Link to="/add" className="add-snippet-button">
      Add Snippet
    </Link>
  );
};

export default AddSnippetButton;