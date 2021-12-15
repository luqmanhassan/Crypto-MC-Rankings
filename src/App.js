import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Lastbar from './components/Lastbar.js';
import Data from './components/Data.js';
import Topbar from './components/Topbar.js';
const App = () => {
  let cry = [];
  let theme = {
    one: ' bg-black text-white',
    two: ' bg-white text-black',
  };
  const [cryptos, setCryptos] = useState([]);
  const [mode, setMode] = useState('dark');
  const [fav, setFav] = useState({check: 'yes'});
  const [tsearch, setTsearch] = useState(0);
  const mk_call = () => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false',
      {mode: 'cors'}
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        cry = [];
        for (let i = 0; i < response.length; i++) {
          cry.push(response[i]);
        }
        setCryptos(cry);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      mk_call();
    }, 1000);
  });
  //
  return (
    <div className={mode === 'dark' ? theme.one : theme.two}>
      <Header mode={mode} />
      <Topbar
        mode={mode}
        setMode={setMode}
        theme={theme}
        fav={fav}
        setFav={setFav}
        tsearch={tsearch}
        setTsearch={setTsearch}
      />
      <Lastbar cryptos={cryptos} theme={theme} mode={mode} />
      <Data cryptos={cryptos} mode={mode} fav={fav} theme={theme} />
      <Footer />
    </div>
  );
};

export default App;
