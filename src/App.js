import './App.css';
import React, {useState, useEffect} from 'react';
import email from './email.svg';
import faqs from './faqs.svg';
import twitter from './twitter.svg';

function App() {
  let cry = [];
  let theme = {
    one: {backgroundColor: 'black', color: 'white'},
    two: {backgroundColor: 'white', color: 'black'},
  };
  const [cryptos, setCryptos] = useState([]);
  const [trend, setTrend] = useState([]);
  const [mode, setMode] = useState('dark');
  const [fav, setFav] = useState({check: 'yes'});
  const [bam, setBam] = useState(0);
  const mk_call = () => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      {mode: 'cors'}
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log('IN MK Call');
        cry = [];
        for (let i = 0; i < 100; i++) {
          cry.push(response[i]);
        }
        setCryptos(cry);
      });
  };
  const trending = () => {
    fetch('https://api.coingecko.com/api/v3/search/trending', {mode: 'cors'})
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        let trending_coins = [];
        for (let i = 0; i < 7; i++) {
          trending_coins.push(response.coins[i]);
        }
        setTrend(trending_coins);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      mk_call();
    }, 1000);
  });

  return (
    <div className="App" style={mode === 'dark' ? theme.one : theme.two}>
      <header>
        <h1
          style={
            mode === 'dark'
              ? {
                  color: 'green',
                  textShadow:
                    '-1px 0 white, 0 5px white, 5px 0 white, 0 -1px white',
                }
              : {
                  color: 'green',
                  textShadow:
                    '-1px 0 black, 0 5px black, 5px 0 black, 0 -1px black',
                }
          }
        >
          Cryptocurrency Rankings
        </h1>
      </header>
      <div className="topbar">
        <span>
          <button
            style={mode === 'dark' ? theme.one : theme.two}
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
            style={mode === 'dark' ? theme.one : theme.two}
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
        <span>Data updates every 1 sec.</span>
        <span>
          <input
            placeholder="SEARCH"
            className="search"
            style={mode === 'dark' ? theme.one : theme.two}
            onChange={(ev) => {
              setBam(Number(String(ev.target.value).length));
              trending();
            }}
          />
        </span>
      </div>
      {cryptos.length > 0 && (
        <div className="lastbar">
          <span style={mode === 'dark' ? theme.one : theme.two}>#</span>
          <span style={mode === 'dark' ? theme.one : theme.two}>&#9759;</span>
          <span style={mode === 'dark' ? theme.one : theme.two}>Coin</span>
          <span style={mode === 'dark' ? theme.one : theme.two}>&#9756;</span>
          <span style={mode === 'dark' ? theme.one : theme.two}>Price</span>
          <span style={mode === 'dark' ? theme.one : theme.two}>24h</span>
          <span style={mode === 'dark' ? theme.one : theme.two}>Mkt Cap</span>
        </div>
      )}
      <div className="data">
        {cryptos.length > 0 &&
          cryptos.map((item, index) => {
            return (
              <div key={index} className={'coin ' + item.name}>
                <span style={mode === 'dark' ? theme.one : theme.two}>
                  <span
                    id="fav_btn"
                    onClick={() => {}}
                    style={mode === 'dark' ? theme.one : theme.two}
                  >
                    {fav.check === 'yes' ? <>&#9734;</> : <>&#9733;</>}
                  </span>
                  {item.market_cap_rank}
                </span>
                <span>
                  <img src={item.image} alt="logo" />
                </span>
                <span style={mode === 'dark' ? theme.one : theme.two}>
                  {item.name}
                </span>
                <span style={mode === 'dark' ? theme.one : theme.two}>
                  {item.symbol}
                </span>
                <span style={mode === 'dark' ? theme.one : theme.two}>
                  {item.current_price}
                </span>
                {item.market_cap_change_percentage_24h > 0 ? (
                  <span style={{color: 'green'}}>
                    {item.market_cap_change_percentage_24h}
                  </span>
                ) : (
                  <span style={{color: 'red'}}>
                    {item.market_cap_change_percentage_24h}
                  </span>
                )}
                <span style={mode === 'dark' ? theme.one : theme.two}>
                  {item.market_cap}
                </span>
              </div>
            );
          })}
      </div>

      {bam > 0 && (
        <div className="trend-bar" id="trend-bar">
          <span className="search-span">Trending Search &#9759;</span>
          {trend.length > 0 &&
            trend.map((item, index) => {
              return (
                <div key={index} className="trending_coins">
                  <span>{item.item.market_cap_rank}</span>
                  <span>{item.item.name}</span>
                  <span>{item.item.symbol}</span>
                </div>
              );
            })}
        </div>
      )}
      <footer>
        <img src={twitter} alt="Twitter" />
        <img src={faqs} alt="Faqs" />
        <img src={email} alt="Email" />
      </footer>
    </div>
  );
}
export default App;
