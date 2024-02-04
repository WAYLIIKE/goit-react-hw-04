import { useState } from 'react';
import axios from 'axios';
import css from './App.module.css';
import { SearchBar } from '../SerachBar/SearchBar';

function App() {
  const onSearch = async query => {
    const key = 'vehYxdMi_tp5gAbzlC5PRD591lqQ63NBA0gfKSP1PQA';
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${key}&query=${query}`,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;
