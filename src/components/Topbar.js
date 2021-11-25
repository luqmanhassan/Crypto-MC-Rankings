import {useState} from 'react';

function Topbar(props) {
  const [trend, setTrend] = useState([]);
  let trending_coins = [];

  const trending = () => {
    fetch('https://api.coingecko.com/api/v3/search/trending', {
      mode: 'cors',
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        trending_coins = [];
        for (let i = 0; i < 7; i++) {
          trending_coins.push(response.coins[i]);
        }
        setTrend(trending_coins);
      });
  };
  return (
    <div className="topbar">
      <span>
        <button
          style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          onClick={() => {
            if (props.mode === 'dark') {
              props.setMode('light');
            } else {
              props.setMode('dark');
            }
          }}
        >
          {props.mode === 'dark' ? <>&#9788;</> : <>&#9790;</>}
        </button>
        <button
          style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          onClick={() => {
            if (props.fav.check === 'yes') {
              props.setFav({check: 'no'});
            } else {
              props.setFav({check: 'yes'});
            }
          }}
        >
          {props.fav.check === 'yes' ? <>&#9734;</> : <>&#9733;</>}
        </button>
      </span>
      <span>Data updates every 1 sec.</span>
      <span>
        <input
          placeholder="SEARCH"
          className="search"
          style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          onChange={(ev) => {
            props.setTsearch(Number(String(ev.target.value).length));
            trending();
          }}
        />
      </span>
      {props.tsearch > 0 && (
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
    </div>
  );
}

export default Topbar;
