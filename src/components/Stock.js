import React from 'react'

const Stock = ({ portfolioToggle, all, name, price }) => (
  <div>

    <div className="card" onClick={() => portfolioToggle(all)}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
      </div>
    </div>


  </div>
);

export default Stock
