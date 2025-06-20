function AddItemForm({ items, setItems, setSuccess }) {
  const [itemData, setItemData] = useState({
    name: '',
    type: '',
    description: '',
    cover: null,
    images: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { ...itemData }; 

    setItems([...items, newItem]);
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
    <form onSubmit={handleSubmit}>
    </form>
  );
}
