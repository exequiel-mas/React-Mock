import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import JSON from '../data.json';

import '../styles/FilterableProductTable.css';

export default function FilterableProductTable() {
  const dataJSON = JSON;
  const [isOnStock, filterStock] = useState(false);
  const [value, changeInput] = useState('');
  return (
    <div className="table">
      <SearchBar
        filterStock={filterStock}
        isOnStock={isOnStock}
        value={value}
        changeInput={changeInput}
      />
      <ProductTable data={dataJSON} isOnStock={isOnStock} value={value} />
    </div>
  );
}
