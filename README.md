# 👥 React User Invitations

A simple React application for browsing users, searching by name, and selecting people to invite.

This project was created as part of my React learning journey to practice working with APIs, React Hooks, component communication, and state management.

## 🚀 Features

- 👥 **User List** — Displays users fetched from an external API.
- 🔍 **Search** — Filters users using a search input.
- ✅ **User Selection** — Allows selecting and deselecting users.
- 📩 **Send Invitations** — Displays a success screen after confirming invitations.
- 🔢 **Invitation Counter** — Shows the number of selected users.
- ⏳ **Loading State** — Handles loading while fetching user data.
- ⚠️ **Error Handling** — Displays an alert if the API request fails.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- SCSS
- Fetch API
- React Hooks (`useState`, `useEffect`)

## 📂 Project Structure

```text
src/
├── components/
│   ├── Success.jsx
│   └── Users.jsx
├── App.jsx
├── index.scss
└── index.js
```

## ⚙️ Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

**2. Navigate to the project folder**

```bash
cd REPOSITORY
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

The application will open in your browser.

## 🌐 API

The application fetches user data from the ReqRes API.

API endpoint:

`https://reqres.in/api/users`

The API provides user information such as names, email addresses, and profile pictures.

## 🧠 What I Practiced

During this project, I practiced:

- Managing component state with `useState`.
- Fetching data with `fetch()` and `useEffect`.
- Passing data and functions between components using props.
- Handling asynchronous requests and loading states.
- Implementing search functionality.
- Adding and removing items from an array using `filter()` and the spread operator.
- Conditional rendering of components.
- Organizing a React application into reusable components.

## 📌 Project Purpose

This is an educational project created to improve my React development skills.

The application demonstrates basic user management interactions, API integration, and React state handling.

**Note:** Invitations are simulated within the application. No actual invitation emails are sent.
