import React, { useEffect, useState } from "react";
import Board from "./componenets/Board";
import Card from "./componenets/Card";
import InfoCard from "./componenets/InfoCard";
import axios from "axios";

function App() {
  const [allCoin, setAllCoin] = useState([]);

  // !Api

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((response) => {
        setAllCoin(response.data);
        console.log(response.data);
      });
  }, []);

  //! Searc Fix !!
  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };
  // const filtredCoins = allCoin.filter((coin) =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="App">
      <main className="flexbox">
        <div>
          <Board id="board-1" className="board">
            //! Search Fix !!!
            {/* <form>
              <input type="text" onChange={handleChange} placeholder="Search" />
            </form> */}
            {allCoin.map((coin) => (
              <Card id={coin.name} className="card" draggable="true">
                <InfoCard
                  key={coin.name}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              </Card>
            ))}
          </Board>
        </div>

        <Board id="board-2" className="board2"></Board>
      </main>
    </div>
  );
}

export default App;
