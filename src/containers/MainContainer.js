import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      baseData: [],
      data: [],
      portfolio: []
    }
  }

  addToPortfolio = (stock) => {
    
    let newData = this.state.data
    this.state.data.map((each, index) => {
      
      if (each.id === stock.id) {
        newData.splice(index, 1)
        this.setState({data: newData})}
      
      
    })
    
    this.setState({
      portfolio: [...this.state.portfolio].concat(stock)
    })

  }
  removeFromPortfolio = (stock) => {
    let newData = this.state.portfolio
    this.state.portfolio.map((each, index) => {
      
      if (each.id === stock.id) {
        newData.splice(index, 1)
        this.setState({portfolio: newData})}
      
      
    })
    
    this.setState({
      data: [...this.state.data].concat(stock)
    })
  }
  sortStocks = (sortOrder) => {
    console.log(sortOrder.target.value)
    let sortable = this.state.data
    switch(sortOrder.target.value) {
      
      case('Alphabetically'):
        this.setState({data: sortable.sort((a,b) => a.name > b.name ? 1 : -1)})
        break;
      case('Price'):
      this.setState({data: sortable.sort((a,b) => a.price > b.price ? 1 : -1)})
      break;
    }
  }
  filterStocks = (filter) => {
    
    let filteredData = this.state.data.filter(each => each.type === filter.target.value)
    this.setState({data: filteredData})
  }
  componentDidMount() {
    fetch(`http://localhost:3001/stocks`)
    .then(response => response.json())
    .then(data => this.setState({
      baseData: data,
      data: data}))
  }
  resetData = () => {
    
  }

  render() {
   
    return (
      <div>
        <SearchBar base={this.resetData} filter={this.filterStocks} sort={this.sortStocks}/>

        <div className="row">
          <div className="col-8">

            <StockContainer addToPortfolio={this.addToPortfolio} data={this.state.data} />

          </div>
          <div className="col-4">

            <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
