import React from 'react';
import '../styles/ProductRow.css';

export default function ProductRow({ name, price }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
