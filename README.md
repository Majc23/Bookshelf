# BookshelfApp

An application to organize book reading made with React and Redux.

This is the completed version of the journal. The project provides a React app that allows the user to add a books to preferred shelves. There are three shelves available: Currently Reading, Want to Read and Read. Books may also be moved from one shelf to another.

The app provides three screens:

1. A Login Page to the user
2. A user authentication or user creation
3. All the shelves with the list of books

Every books is displayed with its cover, title, overview and a control that allows the user to move the book to their shelf of choice.

## Installation

To get started please follow the steps below:

- Install all project dependencies with `yarn install`
- Start the development server with `yarn start`
- Once the server starts, point your browser to http://localhost:3000/ to launch the app

## Main Page

<img src="" />

- The main page shows 3 shelves for books. Each shelf contains books that belong to that shelf.
- The selected book is displayed on the right side, in case it has nothing, the non-selection screen is displayed.
- Each book shows the cover, title and the date of creation.
- Each book also has a control that allows it to be moved to any of the 3 shelves or be removed from a shelf.

## Login Page

<img src="" />

- The login page has an input field to enter the authenticated mail and password (Firebase authentication) in the backend database (Firestore).
- As the user prefers, he can authenticate through a gmail email

## Register Page

<img src="" />

- The registration page has a controlled input field to enter the name, email and password.

## Project Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file
├── public
│   ├── book-icon.png # Used as favicon and also in the app page header
│   └── index.html # public index.html
└── src
    ├── components
    │   ├── auth 
    │   │    ├── LoginScreen.js # This is the page the user uses to start the section
    │   │    └── RegisterScreen.js # This is the page for the registration of new users
    │   │    
    │   ├── bookshelf
    │   │    ├── Carga.js # This component is responsible for displaying the loading screen
    │   │    ├── ShelfEntries.js # This component is responsible for displaying the shelf
    │   │    ├── ShelfEntry.js # This component displays the book data on the shelf
    │   │    ├── ShelfScreen.js # This component is the main 
    │   │    ├── NothingSelected.js # This component is responsible for displaying the nothing selected screen
    │   │    └── Sidebar.js # Shelf bar
    │   └── books
    │       ├── bookAppBar.js # Books bar
    │       └── bookScreen.js # This component displays the data of the selected book
    ├── firebase
    │   └── firebase-config.js # Firebase configuration
    ├── helpers 
    │   ├── fileUpload.js # A JavaScript API to query the book database backend
    │   └── loadBooks.js # A JavaScript API to query the book database backend
    ├── hooks 
    │   └── useForm.js # Hook used to handle a state
    ├── reducers 
    │   ├── authReducer.js # Reducer for actions for section start
    │   ├── booksReducer.js # Reducer for stocks for book storage
    │   └── uiReducer.js # reducer for authentication actions
    ├── routers 
    │   ├── AppRouter.js # This is the root of the app
    │   ├── AuthRouter.js # This is the router for login and registration
    │   ├── PrivateRoute.js # Component to make the route private
    │   └── PublicRoute.js # Component to make the route public
    ├── store 
    │   └── store.js # Store to use redux
    ├── styles # Global styles
    ├── types # constant that defines the type of actions
    ├── BookshelfApp.js # implementation of redux
    └── index.js # Used for DOM rendering
```
