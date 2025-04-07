import React from 'react';

const ListSection = ({ title, items }) => {
  return (
    <div className="list-section">
      <h2 className="section-title">{title}</h2>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={`item-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;