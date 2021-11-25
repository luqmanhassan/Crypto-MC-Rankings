function Lastbar(props) {
  return (
    <div className="lastbar">
      {props.cryptos.length > 0 && (
        <div>
          <span
            style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          >
            #
          </span>
          <span
            style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          >
            &#9759;
          </span>
          <span
            style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          >
            Coin
          </span>
          <span
            style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          >
            &#9756;
          </span>
          <span
            style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          >
            Price
          </span>
          <span
            style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          >
            24h
          </span>
          <span
            style={props.mode === 'dark' ? props.theme.one : props.theme.two}
          >
            MktCap
          </span>
        </div>
      )}
    </div>
  );
}
export default Lastbar;
