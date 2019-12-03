import React, { Component } from "react";
import { storeProducts, detailProduct } from "";

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value={{}}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
