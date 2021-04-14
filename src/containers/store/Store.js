import React, { Component } from "react";
import ItemCount from "./../../components/itemCount/ItemCount";

class Store extends Component {
  constructor() {
    super();

    this.state = {
      stock: 5,
      count: 0,
      total: 0,
    };
  }

  addItemHandler = () => {
    if (this.state.count < this.state.stock) {
      this.setState((previousState) => ({ count: previousState.count + 1 }));
    }
  };

  removeItemHandler = () => {
    if (this.state.count !== 0) {
      this.setState((previousState) => ({ count: previousState.count - 1 }));
    }
  };

  addToCartHandler = () => {
    this.setState((previousState) => ({ total: previousState.count }));
  };

  render() {
    return (
      <>
        <ItemCount
          counter={this.state.count}
          addHandler={this.addItemHandler}
          removeHandler={this.removeItemHandler}
          addToCartHandler={this.addToCartHandler}
        />
        {this.state.total ? (
          <p>You added {this.state.total} courses to your shopping cart!</p>
        ) : null}
      </>
    );
  }
}

export default Store;
