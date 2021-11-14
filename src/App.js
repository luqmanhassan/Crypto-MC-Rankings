import './App.css';
import React, {useState} from 'react';

function App() {
  let cry = [];
  const [cryptos, setCryptos] = useState([]);

  fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    {mode: 'cors'}
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      formatdata(response);
    });

  const formatdata = (info) => {
    for (let i = 0; i < 100; i++) {
      cry.push(info[i]);
    }
    setCryptos(cry);
  };

  return (
    <div className="App">
      <div>
        <h1>Cryptocurrency Rankings</h1>
      </div>
      <div>
        <button>Market Cap</button>
        <button>Trending</button>
        <input placeholder="SEARCH" />
      </div>
      <div>
        <button>Mode</button>
        <button>Fav</button>
        <span>Data updates every 5 min.</span>
      </div>

      <div>
        <span>#</span>
        <span>Coin</span>
        <span>Price</span>
        <span>24h</span>
        <span>Mkt Cap</span>
      </div>
      {cryptos.length > 0 &&
        cryptos.map((item, index) => {
          return (
            <div key={index}>
              <span>{item.market_cap_rank}</span>
              <img src={item.image} alt="logo" />
              <span>{item.name}</span>
              <span>{item.symbol}</span>
              <span>{item.current_price}</span>
              <span>{item.market_cap_change_percentage_24h}</span>
              <span>{item.market_cap}</span>
            </div>
          );
        })}
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
