# CodeSnippeX - Full Stack MERN Web Application

**CodeSnippeX** is a full-stack MERN (MongoDB, Express, React, Node.js) web application for managing code snippets with full CRUD functionality. It provides user authentication, snippet search, and a popularity-based ranking system. This project is designed to help developers easily store, manage, and retrieve code snippets, with features that promote user engagement like snippet voting and efficient search.

## Features

### Core Features
- **User Authentication & Authorization**: 
  - JWT-based secure authentication for users.
  - Allows for user registration, login, and access to their own snippets.
  
- **Snippet Management (CRUD Operations)**:
  - Users can create, read, update, and delete their code snippets.
  - Each snippet can have a title, description, code content, and tags.

- **Popularity Ranking System**:
  - Users can upvote or downvote snippets.
  - Snippets are ranked based on popularity (upvotes minus downvotes).

- **Snippet Search**:
  - A search bar allows users to search snippets by title, description, tags, or code.

- **Responsive Design**:
  - The application is fully responsive, optimized for both desktop and mobile devices.

### Additional Features
- **Snippet Details Page**: 
  - View full details of a snippet, including its code, description, and votes.
  
- **User-Specific Features**:
  - Authenticated users can only edit or delete their own snippets.
  
- **Efficient Database Queries**:
  - Snippets can be filtered and sorted by votes, relevance, or date added.

## Project Structure

```bash
snippex/
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection configuration
│   ├── controllers/
│   │   ├── snippetController.js # Logic for snippet CRUD operations
│   │   └── userController.js    # Logic for user registration and login
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── models/
│   │   ├── Snippet.js           # Snippet schema model for MongoDB
│   │   └── User.js              # User schema model for MongoDB
│   ├── routes/
│   │   ├── snippetRoutes.js     # API routes for snippets
│   │   └── userRoutes.js        # API routes for user authentication
│   └── server.js                # Express server setup and API endpoints
├── public/
│   ├── favico.png
│   ├── index.html               # Main HTML file for the React app
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js                   # Root component for the React app
│   ├── components/
│   │   ├── AddSnippetButton.js   # Component for adding snippets
│   │   ├── Header.js            # Header with navigation and search bar
│   │   ├── SearchBar.js         # Search bar for searching snippets
│   │   ├── SnippetForm.js       # Form for adding or editing snippets
│   │   ├── SnippetItem.js       # Component for rendering a single snippet
│   │   ├── SnippetList.js       # Component for rendering the list of snippets
│   │   └── SnippetTile.js       # Individual snippet tile view
│   ├── context/
│   │   └── AuthContext.js       # Authentication context for managing user login state
│   ├── pages/
│   │   ├── AddEditSnippetPage.js # Page for adding/editing snippets
│   │   ├── HomePage.js           # Homepage showing snippets and search bar
│   │   ├── LoginPage.js          # User login page
│   │   ├── RegisterPage.js       # User registration page
│   │   └── SnippetDetailsPage.js # Page for viewing snippet details
│   ├── styles.css               # Global styles
    └── utils/
        └── api.js               # Utility functions for interacting with backend APIs
