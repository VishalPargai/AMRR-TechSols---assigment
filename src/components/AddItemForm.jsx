import React, { useState } from 'react';

function AddItemForm({ items, setItems, setSuccess }) {
  const [itemData, setItemData] = useState({
    name: '',
    type: '',
    description: '',
    cover: null,
    images: [],
  });

  // Utility to convert a file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleCoverChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setItemData({ ...itemData, cover: base64 });
    }
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const base64Images = await Promise.all(files.map(file => convertToBase64(file)));
    setItemData({ ...itemData, images: base64Images });
  };

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...itemData };

    setItems([...items, newItem]);

    // Clear the form
    setItemData({
      name: '',
      type: '',
      description: '',
      cover: null,
      images: [],
    });

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={itemData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="type"
        placeholder="Item Type (e.g., Shirt, Pant)"
        value={itemData.type}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Item Description"
        value={itemData.description}
        onChange={handleChange}
        required
      />
      <label>Cover Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleCoverChange}
        required
      />
      <label>Additional Images:</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
