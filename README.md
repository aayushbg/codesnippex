CodeSnippeX - Full Stack MERN Web Application

CodeSnippeX is a full-stack MERN (MongoDB, Express, React, Node.js) web application for managing code snippets with full CRUD functionality. It provides user authentication, snippet search, and a popularity-based ranking system. This project is designed to help developers easily store, manage, and retrieve code snippets, with features that promote user engagement like snippet voting and efficient search.
Features
Core Features

    User Authentication & Authorization:
        JWT-based secure authentication for users.
        Allows for user registration, login, and access to their own snippets.

    Snippet Management (CRUD Operations):
        Users can create, read, update, and delete their code snippets.
        Each snippet can have a title, description, code content, and tags.

    Popularity Ranking System:
        Users can upvote or downvote snippets.
        Snippets are ranked based on popularity (upvotes minus downvotes).

    Snippet Search:
        A search bar allows users to search snippets by title, description, tags, or code.

    Responsive Design:
        The application is fully responsive, optimized for both desktop and mobile devices.

Additional Features

    Snippet Details Page:
        View full details of a snippet, including its code, description, and votes.
    User-Specific Features:
        Authenticated users can only edit or delete their own snippets.
    Efficient Database Queries:
        Snippets can be filtered and sorted by votes, relevance, or date added.

Project Structure

graphql

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

System Design
1. Frontend (React)

    React Components: The frontend consists of reusable components like SnippetList, SnippetItem, SearchBar, etc., that are used across pages such as the home page, snippet details page, and snippet form page.
    Context API: Authentication state is managed using React's Context API (AuthContext.js), which keeps track of user login status and provides login/logout functionality across components.
    Routing: React Router is used to handle navigation between the different pages (e.g., HomePage, LoginPage, RegisterPage, SnippetDetailsPage).

2. Backend (Node.js/Express)

    User Authentication: JWT (JSON Web Tokens) is used for secure authentication. The auth.js middleware protects routes that require authentication, ensuring only logged-in users can add/edit/delete snippets.
    Snippet Controller: Manages all snippet-related operations like creating, updating, fetching, and deleting snippets.
    User Controller: Handles user registration, login, and authentication processes.

3. Database (MongoDB)

    Snippet Schema (Snippet.js):
        Stores details like the snippet's title, description, content (code), tags, author (user), upvotes, downvotes, and timestamps.

    javascript

const snippetSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  tags: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
});

User Schema (User.js):

    Stores user details such as name, email, password (encrypted), and user roles.

javascript

    const userSchema = new mongoose.Schema({
      name: String,
      email: { type: String, unique: true },
      password: String,
    });

4. API Design

    User Routes (/api/users):
        POST /register: Register a new user.
        POST /login: User login and token generation.
    Snippet Routes (/api/snippets):
        GET /: Fetch all snippets.
        POST /: Create a new snippet (protected route).
        GET /:id: Fetch a specific snippet by ID.
        PUT /:id: Update a snippet by ID (protected route).
        DELETE /:id: Delete a snippet by ID (protected route).
        POST /:id/upvote: Upvote a snippet.
        POST /:id/downvote: Downvote a snippet.

Database Design

    MongoDB Collections:
        Users Collection:
            Stores user information, including encrypted passwords.
        Snippets Collection:
            Stores snippet details, including code content, metadata (title, tags, etc.), and vote counts.
    Relationships:
        A user can create multiple snippets. Each snippet references its author (user) via a foreign key (user field in the Snippet schema).

Getting Started
Prerequisites

    Node.js
    MongoDB (local or cloud-based like MongoDB Atlas)

Installation

    Clone the repository:

    bash

git clone https://github.com/your-username/CodeSnippeX.git
cd CodeSnippeX

Install dependencies for both backend and frontend:

bash

cd backend
npm install
cd ../
npm install

Set up environment variables: Create a .env file in the backend/ directory with the following:

makefile

MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>

Run the application:

    Backend:

    bash

cd backend
npm run dev

Frontend:

bash

        npm start

License

This project is licensed under the MIT License. See the LICENSE file for details.
