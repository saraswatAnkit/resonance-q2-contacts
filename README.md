Contacts Application (React + Vite + Tailwind)

This is a simple responsive Contacts application built with React + Vite and styled using Tailwind CSS.
The app fetches user data from JSONPlaceholder API
 and displays it in a clean, card-based UI.

Features

Fetches contacts from JSONPlaceholder /users

Responsive grid layout (mobile → desktop)

Tailwind CSS styling with hover effects

Displays contact details: name, email, phone, company, city, website

Installation & Setup

Clone the repository

git clone https://github.com/saraswatAnkit/resonance-q2-contacts.git
cd resonance-q2-contacts


Install dependencies

npm install


Run the development server

npm run dev


The app will be available at http://localhost:5173
.

Tailwind CSS Setup

This project uses the official Tailwind Vite plugin.

Installed dependencies:

npm install tailwindcss @tailwindcss/vite


Configured in vite.config.js:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})


Imported in src/index.css:

@import "tailwindcss";

Project Structure
contacts-app/
├── src/
│   ├── App.jsx        # Main Contacts component
│   ├── main.jsx       # Entry point
│   ├── index.css      # Tailwind import
├── vite.config.js     # Vite + Tailwind config
├── package.json
└── README.md