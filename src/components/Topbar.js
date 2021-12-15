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
    <div className="container mx-auto flex justify-between py-5 px-10 border-4 border-lime-500">
      <span>
        <button
          className={
            props.mode === 'dark'
              ? props.theme.one + ' mr-4 text-xl'
              : props.theme.two + ' mr-4 text-xl'
          }
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
          className={
            props.mode === 'dark'
              ? props.theme.one + 'p-2 mr-4 text-xl'
              : props.theme.two + 'p-2 mr-4 text-xl'
          }
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

      <span className=" ">
        <input
          className={
            props.mode === 'dark'
              ? props.theme.one +
                'p-2 border-4 border-lime-500 text-xl text-center relative'
              : props.theme.two +
                'p-2 border-4 border-lime-500 text-xl text-center relative'
          }
          placeholder="SEARCH"
          onChange={(ev) => {
            props.setTsearch(Number(String(ev.target.value).length));
            trending();
          }}
        />
      </span>
      {props.tsearch > 0 && (
        <div className="trend-bar bg-lime-500 w-80 p-5 text-center absolute top-80 right-5 lg:top-56 lg:right-20">
          <span className=" text-white underline">Trending Search &#9759;</span>
          {trend.length > 0 &&
            trend.map((item, index) => {
              return (
                <div
                  key={index}
                  className="m-5 text-black flex justify-between"
                >
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
// lg:top-56 lg:right-20
