import React from 'react';
import '../styles/ProductCategoryRow.css';

export default function ProductCategoryRow({ children }) {
  return (
    <tr className="category">
      <td>
        <strong>{children}</strong>
      </td>
    </tr>
  );
}
