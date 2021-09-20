import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div>
        <h2>Stocks</h2>
        {
         this.props.data.map((each, index) => {
           
         const {
           id,
           ticker, 
           name, 
           type,
           price
         } = each
         return <Stock key={id} portfolioToggle={this.props.addToPortfolio} all={each} ticker={ticker} name={name} type={type} price={price}/>
        })
        }
      </div>
    );
  }

}

export default StockContainer;
