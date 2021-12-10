import React from "react";

const InfoCard = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <diV className="infoCard">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{symbol}</h2>
        <h1>{name}</h1>
      </div>
      <div>
        <h5>Price</h5>
        <h5>${price}</h5>
      </div>
      <div>
        <h5>Price Volume</h5>
        <h5>${volume.toLocaleString()}</h5>
      </div>

      <div>
        <h5>Price Change</h5>
        {priceChange < 0 ? (
          <h5 className=" red">{priceChange.toFixed(2)}%</h5>
        ) : (
          <h5 className=" green">{priceChange.toFixed(2)}%</h5>
        )}
      </div>
      <div>
        <h5>Mkt Cap</h5>
        <h5> ${marketcap.toLocaleString()}</h5>
      </div>
    </diV>
  );
};

export default InfoCard;
