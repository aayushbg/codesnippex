import React from 'react';
import { Link } from 'react-router-dom';
import AddSnippetButton from './AddSnippetButton';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">CodeSnippeX</Link>
      <AddSnippetButton />
    </header>
  );
};

export default Header;