import React, { useState } from 'react';
import '../App.css';

function AddItems({ items, setItems }) {
  const [itemData, setItemData] = useState({
    name: '',
    type: '',
    description: '',
    cover: null,
    images: [],
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, itemData]);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="form-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item Name" onChange={e => setItemData({...itemData, name: e.target.value})} required />
        <select onChange={e => setItemData({...itemData, type: e.target.value})} required>
          <option value="">Select Type</option>
          <option>Shirt</option>
          <option>Pant</option>
          <option>Shoes</option>
          <option>Sports Gear</option>
        </select>
        <textarea placeholder="Description" onChange={e => setItemData({...itemData, description: e.target.value})} required />
        <input type="file" accept="image/*" onChange={e => setItemData({...itemData, cover: URL.createObjectURL(e.target.files[0])})} required />
        <input type="file" accept="image/*" multiple onChange={e => setItemData({...itemData, images: [...e.target.files].map(file => URL.createObjectURL(file))})} />
        <button type="submit">Add Item</button>
      </form>
      {success && <p className="success-msg">Item successfully added</p>}
    </div>
  );
}

export default AddItems;
