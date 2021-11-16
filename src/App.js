import './App.css';
import React, {useState, useEffect} from 'react';
import email from './email.svg';
import faqs from './faqs.svg';
import twitter from './twitter.svg';

function App() {
  let cry = [];
  const [cryptos, setCryptos] = useState([]);
  const [mode, setMode] = useState('dark');
  const [fav, setFav] = useState({check: 'yes'});
  const mk_call = () => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      {mode: 'cors'}
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        cry = [];
        for (let i = 0; i < 100; i++) {
          cry.push(response[i]);
        }
        setCryptos(cry);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      mk_call();
    }, 10000);
  });

  return (
    <div
      className="App"
      style={
        mode === 'dark'
          ? {backgroundColor: 'black'}
          : {backgroundColor: 'green'}
      }
    >
      <header>
        <h1>Cryptocurrency Rankings</h1>
      </header>
      <div className="topbar">
        <span>
          <button>Market Cap</button>
          <button>Trending</button>
        </span>
        <span>
          <input
            placeholder="SEARCH"
            onChange={() => {
              console.log('you inn');
              document.getElementsByClassName('coin')[1].display = 'none';
            }}
          />
        </span>
      </div>
      <div className="midbar">
        <span>
          <button
            onClick={() => {
              if (mode === 'dark') {
                setMode('light');
              } else {
                setMode('dark');
              }
            }}
          >
            {mode === 'dark' ? <>&#9788;</> : <>&#9790;</>}
          </button>
          <button
            onClick={() => {
              if (fav.check === 'yes') {
                setFav({check: 'no'});
              } else {
                setFav({check: 'yes'});
              }
            }}
          >
            {fav.check === 'yes' ? <>&#9734;</> : <>&#9733;</>}
          </button>
        </span>

        <span>Data updates every 10 sec.</span>
      </div>
      <div className="lastbar">
        <span>#</span>
        <span>&#9759;</span>
        <span>Coin</span>
        <span>&#9756;</span>
        <span>Price</span>
        <span>24h</span>
        <span>Mkt Cap</span>
      </div>
      <div className="data">
        {cryptos.length &&
          cryptos.map((item, index) => {
            return (
              <div key={index} className={'coin ' + item.name}>
                <span>
                  <span id="fav_btn" onClick={() => {}}>
                    {fav.check === 'yes' ? <>&#9734;</> : <>&#9733;</>}
                  </span>
                  {item.market_cap_rank}
                </span>
                <span>
                  <img src={item.image} alt="logo" />
                </span>
                <span>{item.name}</span>
                <span>{item.symbol}</span>
                <span>{item.current_price}</span>
                {item.market_cap_change_percentage_24h > 0 ? (
                  <span style={{color: 'green'}}>
                    {item.market_cap_change_percentage_24h}
                  </span>
                ) : (
                  <span style={{color: 'red'}}>
                    {item.market_cap_change_percentage_24h}
                  </span>
                )}

                <span>{item.market_cap}</span>
              </div>
            );
          })}
      </div>
      <footer>
        <img src={twitter} alt="Twitter" />
        <img src={faqs} alt="Faqs" />
        <img src={email} alt="Email" />
      </footer>
    </div>
  );
}

export default App;

/*




*/
