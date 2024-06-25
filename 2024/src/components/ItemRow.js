import React from 'react';
import './ItemRow.css';

const ItemRow = ({ item, index, setEditItem, deleteItem }) => (
  <div className="row">
    <span>{index}</span>
    <span>{item.name}</span>
    <span>{item.person}</span>
    <span>{item.status}</span>
    <span>{item.startDate}</span>
    <span>{item.deadline}</span>
    <span>{item.projectName}</span>
    <span>
      <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a>
    </span>
    <span>
      <button onClick={() => setEditItem(item)}>Edit</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </span>
  </div>
);

export default ItemRow;
