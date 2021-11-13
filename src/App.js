import './App.css';

function App() {
  const clickme = () => {
    console.log('yo');
    fetch('https://api.coinpaprika.com/v1/coins', {mode: 'cors'})
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        formatdata(response);
      });
  };
  const formatdata = (info) => {
    for (let i = 0; i < 100; i++) {
      let card = document.createElement('div');
      card.id = 'example';
      let data1 = document.createElement('span');
      let data2 = document.createElement('span');
      let data3 = document.createElement('span');

      let data1text = document.createTextNode(info[0].name);
      let data2text = document.createTextNode(info[0].rank);
      let data3text = document.createTextNode(info[0].symbol);

      data1.appendChild(data1text);
      data2.appendChild(data2text);
      data3.appendChild(data3text);

      card.appendChild(data1);
      card.appendChild(data2);
      card.appendChild(data3);

      document.getElementById('data').appendChild(card);
    }
  };

  return (
    <div className="App">
      <h1>Crypto MarketCap Rankings</h1>
      <h2>Top 100</h2>
      <div id="datapoint"></div>
      <button onClick={clickme}>CLick Here</button>
    </div>
  );
}

// 007a19b6-f0c3-4552-9343-ff51882faefa
// https://api.coinpaprika.com/v1/coins
export default App;
// https://api.coinpaprika.com/v1/coins
