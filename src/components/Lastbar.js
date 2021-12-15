function Lastbar(props) {
  return (
    <div className="container mx-auto ">
      {props.cryptos.length > 0 && (
        <div className="flex justify-around py-5 my-5 px-10 border-4 border-lime-500">
          <span className="flex-1">#</span>
          <span className="flex-1">Coin</span>
          <span className="flex-1 sm:block hidden">&#9759;</span>
          <span className="flex-1">Price</span>
          <span className="flex-1 sm:block hidden">24h</span>
          <span className="flex-1">MktCap</span>
        </div>
      )}
    </div>
  );
}
export default Lastbar;
