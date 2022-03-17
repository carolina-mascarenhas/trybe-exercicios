import React from 'react';

class Daughter extends React.Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <p>Eu tenho { this.props.money } pra gastar</p>
        <button
          onClick={ this.props.spendMoney }
        >
          PEDIR IFOOD
        </button>
      </div>
    )
  }
}

export default Daughter;
