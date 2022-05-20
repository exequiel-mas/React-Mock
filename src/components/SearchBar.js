import React, { useState } from 'react';
import '../styles/SearchBar.css';

export default function SearchBar({
  filterStock,
  changeInput,
  isOnStock,
  value,
}) {
  return (
    <div className="searchBar">
      <input
        onChange={e => changeInput(e.target.value.toLowerCase())}
        placeholder="Search..."
        type="text"
      />
      <label htmlFor="cbox">
        <input
          onChange={() => filterStock(!isOnStock)}
          type="checkbox"
          id="cbox"
          value="second_checkbox"
        />
        Only show products in stock
      </label>
    </div>
  );
}
