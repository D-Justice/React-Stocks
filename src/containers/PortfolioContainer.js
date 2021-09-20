import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('portfolio', this.props.portfolio)
    console.log(this.props.data)
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.props.portfolio.map((each, index) => {

            const {
              id,
              ticker,
              name,
              type,
              price
            } = each
            return <Stock key={id} portfolioToggle={this.props.removeFromPortfolio} all={each} ticker={ticker} name={name} type={type} price={price} />
          })
        }
      </div>
    );
  }

}

export default PortfolioContainer;
