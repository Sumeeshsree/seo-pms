import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemList.css';
import ItemRow from './ItemRow';
import ItemForm from './ItemForm';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory for navigation

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [showDetail, setShowDetail] = useState(false); // State to manage detail panel
  const history = useHistory(); // Initialize useHistory for navigation

  useEffect(() => {
    axios.get('https://seo-pms.vercel.app/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addItem = (item) => {
    axios.post('https://seo-pms.vercel.app/items', item)
      .then(response => {
        setItems([...items, response.data]);
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  const updateItem = (updatedItem) => {
    axios.put(`https://seo-pms.vercel.app/items/${updatedItem.id}`, updatedItem)
      .then(response => {
        setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
        setEditItem(null);
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };

  const deleteItem = (id) => {
    axios.delete(`https://seo-pms.vercel.app/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  const toggleDetail = () => {
    setShowDetail(!showDetail); // Toggle detail panel visibility
  };

  // Function to navigate to detail view page
  const navigateToDetail = (taskId) => {
    history.push(`/detail/${taskId}`);
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
          onClickTaskName={() => navigateToDetail(item.id)} // Pass function to handle task name click
        />
      ))}
      {/* Button to toggle detail panel */}
      <div className="detail-toggle">
        <button onClick={toggleDetail}>+</button>
      </div>
      {/* Detail Panel */}
      {showDetail && (
        <div className="detail-panel">
          <div className="detail-content">
            <button className="close-btn" onClick={toggleDetail}>Close</button>
            <h2>Details Panel</h2>
            <p>Detail content goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
