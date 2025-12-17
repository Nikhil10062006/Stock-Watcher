Favourite Stocks Watcher:

A simple React app to track your favourite stocks and view their real-time prices.

🚧 Project Status: Prototype Phase — Core logic implemented. UI and advanced features are under  progress.

Features Implemented:

* Add a stock symbol to your favourites
* View current stock prices fetched from the Finnhub API
* The stock  price updates every 60 seconds

Tech Stack:

* Frontend: React.js
* API: Finnhub.io
* Styling: Vanilla CSS

How to Run:

1.Clone the repository:

git clone https://github.com/Nikhil10062006/Stock-Watcher
cd Stock-Watcher


2.Install dependencies:

npm install
# or
yarn install


3.Create a .env file in the root and add your Finnhub API key:

VITE_FINNHUB_API_KEY=your_api_key_here


4.Start the development server:

npm run dev
# or
yarn dev


5.Open your browser at http://localhost:5173 (Vite default)

6.Use the input box to add stock symbols (e.g., AAPL, GOOG) and watch their prices update automatically.

Roadmap / Future Improvements:

User Authentication & Account Management:
* Create user registration (sign-up) screen with backend support
* Create login screen for existing users
* Implement secure authentication (JWT / session-based)
* Display logged-in user details (name, email, username) on the top-right corner
* Add a header/ribbon component to show user info or login/register buttons

User Dashboard & Navigation:
* Create a dashboard layout accessible after login
* Add a global menu to navigate to the “Add Favourite Stocks” form from any page
* Show helper information (logged-in user email, logout option) in the header

Favourite Stocks Management:
* Store user-specific favourite stocks in a database
* Create backend APIs to add, fetch, and manage favourite stocks
* Display the user’s favourite stock list with real-time prices
* Allow removing stocks from the favourites list

Real-Time Stock Price Updates:
* Integrate stock price API (Finnhub or alternative) securely via backend
* Fetch and update stock prices every 60 seconds automatically
* Handle API rate limits and error scenarios gracefully

Backend & Data Persistence:
* Introduce a backend server (Node.js + Express )
* Design database schemas for users and favourite stocks
* Persist user data and stock lists across sessions and devices

Sharing & Collaboration:
* Allow users to share their favourite stock lists with other registered users
* Enable view-only or editable shared lists
* Add basic access control for shared lists

UI & UX Improvements:
* Improve overall UI using Tailwind CSS or component libraries
* Make the application fully responsive
* Add loading states, error messages, and success notifications

Notes:

This is a minimum viable product (MVP) to demonstrate core functionality of the website.

The project is actively under development; additional features and UI improvements will be done in the upcoming days .
