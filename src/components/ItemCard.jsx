import React from 'react';
import '../App.css';

function ItemCard({ item, onClick }) {
  return (
    <div className="item-card" onClick={onClick}>
      <img src={item.cover} alt={item.name} className="cover-img" />
      <p className="item-name">{item.name}</p>
    </div>
  );
}

export default ItemCard;
