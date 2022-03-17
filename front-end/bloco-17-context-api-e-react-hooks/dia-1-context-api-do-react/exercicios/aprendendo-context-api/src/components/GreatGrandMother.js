import React from 'react';
import GrandMother from './Grandmother';

class GreatGrandMother extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 1000000
    }
  }

  handleSpendMoney = () => {
    this.setState((prevState) => ({
      money: prevState.money - 100,
    }))
  }

  render() {
    return (
      <div>
        <h1>Eu sou a bisavó</h1>
        <GrandMother money={ this.state.money } spendMoney={ this.handleSpendMoney } />
      </div>
    )
  }
}

export default GreatGrandMother;
