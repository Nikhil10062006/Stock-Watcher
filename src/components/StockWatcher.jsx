import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;

function StockWatcher() {
  const [symbol, setSymbol] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [prices, setPrices] = useState({});

  const addStock = () => {
    if (symbol && !favorites.includes(symbol.toUpperCase())) {
      setFavorites([...favorites, symbol.toUpperCase()]);
      setSymbol("");
    }
  };

  const fetchPrices = async () => {
    let updatedPrices = {};

    for (let stock of favorites) {
      try {
        const res = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${API_KEY}`
        );
        const data = await res.json();
        updatedPrices[stock] = data.c;
      } catch (error) {
        console.error("Error fetching price for", stock);
      }
    }

    setPrices(updatedPrices);
  };

  useEffect(() => {
    if (favorites.length > 0) {
      fetchPrices();
      const interval = setInterval(fetchPrices, 60000);
      return () => clearInterval(interval);
    }
  }, [favorites]);

  return (
    <div>
      <h2>Favorite Stocks</h2>
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Stock Symbol"
      />
      <button onClick={addStock}>Add</button>

      <ul>
        {favorites.map((stock) => (
          <li key={stock}>
            {stock} - ${prices[stock] || "Loading..."}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockWatcher;
