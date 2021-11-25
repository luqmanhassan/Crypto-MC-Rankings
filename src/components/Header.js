function Header(props) {
  return (
    <header>
      <h1
        style={
          props.mode === 'dark'
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
        Crypto MarketCap Ranker
      </h1>
    </header>
  );
}
export default Header;
