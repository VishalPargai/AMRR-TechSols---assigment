import React, { useState } from 'react';
import ItemCard from '../components/ItemCard';
import ItemModal from '../components/ItemModal';
import '../App.css';

function ViewItems({ items, setItems }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = (itemToDelete) => {
    const updatedItems = items.filter(item => item !== itemToDelete);
    setItems(updatedItems);
    setSelectedItem(null);
  };

  return (
    <div className="item-list">
      <h2>Items</h2>
      <div className="grid">
        {items.map((item, idx) => (
          <ItemCard
            key={idx}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default ViewItems;
