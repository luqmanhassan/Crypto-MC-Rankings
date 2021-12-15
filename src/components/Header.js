function Header(props) {
  return (
    <header className="container mx-auto p-5">
      <h1 className="text-center text-6xl p-5 font-extrabold text-lime-500 ">
        Crypto MarketCap Ranker
      </h1>
    </header>
  );
}
export default Header;

/*
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

*/
