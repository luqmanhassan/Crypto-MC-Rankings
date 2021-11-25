function Data(props) {
  const comas = (y) => {
    let x = String(y);
    let z = '';
    switch (x.length) {
      case 7:
        z = x.slice(0, 1) + ',' + x.slice(1, 4) + ',' + x.slice(4, x.length);

        break;
      case 8:
        z = x.slice(0, 2) + ',' + x.slice(2, 5) + ',' + x.slice(5, x.length);

        break;
      case 9:
        z = x.slice(0, 3) + ',' + x.slice(3, 6) + ',' + x.slice(6, x.length);

        break;
      case 10:
        z =
          x.slice(0, 1) +
          ',' +
          x.slice(1, 4) +
          ',' +
          x.slice(4, 7) +
          ',' +
          x.slice(7, x.length);

        break;
      case 11:
        z =
          x.slice(0, 2) +
          ',' +
          x.slice(2, 5) +
          ',' +
          x.slice(5, 8) +
          ',' +
          x.slice(8, x.length);

        break;
      case 12:
        z =
          x.slice(0, 3) +
          ',' +
          x.slice(3, 6) +
          ',' +
          x.slice(6, 9) +
          ',' +
          x.slice(9, x.length);

        break;
      case 13:
        z =
          x.slice(0, 1) +
          ',' +
          x.slice(1, 4) +
          ',' +
          x.slice(4, 7) +
          ',' +
          x.slice(7, 10) +
          ',' +
          x.slice(10, x.length);

        break;
      default:
    }
    return z;
  };
  return (
    <div className="data">
      {props.cryptos.length > 0 &&
        props.cryptos.map((item, index) => {
          return (
            <div key={index} className={'coin ' + item.name}>
              <span
                style={
                  props.mode === 'dark' ? props.theme.one : props.theme.two
                }
              >
                {/*  
                <span
                  id="fav_btn"
                  style={
                    props.mode === 'dark' ? props.theme.one : props.theme.two
                  }
                >
                  {props.fav.check === 'yes' ? <>&#9734;</> : <>&#9733;</>}
                </span>  
                  */}

                {item.market_cap_rank}
              </span>
              <span>
                <img src={item.image} alt="logo" />
              </span>
              <span
                style={
                  props.mode === 'dark' ? props.theme.one : props.theme.two
                }
              >
                {item.name}
              </span>
              <span
                style={
                  props.mode === 'dark' ? props.theme.one : props.theme.two
                }
              >
                {item.symbol}
              </span>
              <span
                style={
                  props.mode === 'dark' ? props.theme.one : props.theme.two
                }
              >
                ${item.current_price}
              </span>
              {item.market_cap_change_percentage_24h > 0 ? (
                <span style={{color: 'green'}}>
                  {Number(item.market_cap_change_percentage_24h).toFixed(1)}
                </span>
              ) : (
                <span style={{color: 'red'}}>
                  {Number(item.market_cap_change_percentage_24h).toFixed(1)}
                </span>
              )}
              <span
                style={
                  props.mode === 'dark' ? props.theme.one : props.theme.two
                }
              >
                ${item.market_cap && comas(item.market_cap)}
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default Data;
