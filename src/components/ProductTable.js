import React from 'react';
import '../styles/ProductTable.css';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable({ data, isOnStock, value }) {
  const filteredData = data.filter(el => {
    return el.name.toLowerCase().includes(value);
  });

  const filteredStock = array => {
    return array.filter(el => {
      return el.stocked === isOnStock;
    });
  };
  const array = isOnStock ? filteredStock(filteredData) : filteredData;

  return (
    <table className="productTable">
      <thead className="heading">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow className="heading">
          SportingGoods
        </ProductCategoryRow>
        {array.map(el =>
          el.category === 'Sporting Goods' ? (
            <ProductRow key={el.name} name={el.name} price={el.price} />
          ) : null
        )}
        <ProductCategoryRow className="heading">Electronics</ProductCategoryRow>
        {array.map(el =>
          el.category === 'Electronics' ? (
            <ProductRow key={el.name} name={el.name} price={el.price} />
          ) : null
        )}
      </tbody>
    </table>
  );
}
