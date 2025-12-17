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

* Add user authentication to save favourites across devices
* Add functionality to remove stocks from favourites
* Integrate the favourite stocks of the user  in the database
* Improve UI with styled components or Tailwind CSS
* Implement alerts/notifications for price 
* Enable the user to share the lists with their friends

Notes:

This is a minimum viable product (MVP) to demonstrate core functionality of the website.

The project is actively under development; additional features and UI improvements will be done in the upcoming days .
