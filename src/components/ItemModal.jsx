import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';

function ItemModal({ item, onClose, onDelete }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{item.name}</h2>
        <p><strong>Type:</strong> {item.type}</p>
        <p><strong>Description:</strong> {item.description}</p>

        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src={item.cover} alt="Cover" />
          </div>
          {item.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Additional ${index}`} />
            </div>
          ))}
        </Carousel>

        <div className="modal-buttons">
          <button className="enquire-btn">Enquire</button>
          <button className="delete-btn" onClick={() => onDelete(item)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
