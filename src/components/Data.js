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
    <div className="data container mx-auto ">
      {props.cryptos.length > 0 &&
        props.cryptos.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-around py-5 my-5 px-10 border-4 border-lime-500"
            >
              <span
                className={
                  props.mode === 'dark'
                    ? props.theme.one + ' flex-1'
                    : props.theme.two + ' flex-1'
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
              <span className="flex-1 flex flex-col justify-center ">
                <img className="w-10 " src={item.image} alt="logo" />
                <span
                  className={
                    props.mode === 'dark' ? props.theme.one : props.theme.two
                  }
                >
                  {item.symbol}
                </span>
              </span>
              <span
                className={
                  props.mode === 'dark'
                    ? props.theme.one + ' flex-1 sm:block hidden'
                    : props.theme.two + ' flex-1 sm:block hidden'
                }
              >
                {item.name}
              </span>

              <span
                className={
                  props.mode === 'dark'
                    ? props.theme.one + ' flex-1'
                    : props.theme.two + ' flex-1'
                }
              >
                ${item.current_price}
              </span>
              {item.market_cap_change_percentage_24h > 0 ? (
                <span className="text-lime-500 flex-1 sm:block hidden">
                  {Number(item.market_cap_change_percentage_24h).toFixed(1)}
                </span>
              ) : (
                <span className="text-red-500 flex-1 sm:block hidden">
                  {Number(item.market_cap_change_percentage_24h).toFixed(1)}
                </span>
              )}
              <span
                className={
                  props.mode === 'dark'
                    ? props.theme.one + ' flex-1'
                    : props.theme.two + ' flex-1'
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
