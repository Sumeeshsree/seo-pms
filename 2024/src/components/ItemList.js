import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemList.css';
import ItemRow from './ItemRow';
import ItemForm from './ItemForm';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addItem = (item) => {
    axios.post('http://localhost:5000/items', item)
      .then(response => {
        setItems([...items, response.data]);
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  const updateItem = (updatedItem) => {
    axios.put(`http://localhost:5000/items/${updatedItem.id}`, updatedItem)
      .then(response => {
        setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
        setEditItem(null);
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <div className="container">
      <h1 className="title">SEO Items</h1>
      <ItemForm addItem={addItem} updateItem={updateItem} editItem={editItem} />
      <div className="header">
        <span>Serial No</span>
        <span>Task Name</span>
        <span>Person</span>
        <span>Status</span>
        <span>Start Date</span>
        <span>Deadline</span>
        <span>Project Name</span>
        <span>Actions</span>
      </div>
      {items.map((item, index) => (
        <ItemRow
          key={item.id}
          item={item}
          index={index + 1}
          setEditItem={setEditItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
