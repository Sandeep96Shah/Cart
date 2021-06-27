import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
          price:9999,
          title:"Mobile",
          qty:1,
          img:'https://images.unsplash.com/photo-1603210119709-26103832d0e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          id:1
        },
        {
          price:32099,
          title:"Laptop",
          qty:1,
          img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
          id:2
        },
        {
          price:999,
          title:"Watch",
          qty:1,
          img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80',
          id:3
        },
        {
          price:1099,
          title:"Speaker",
          qty:1,
          img:'https://images.unsplash.com/photo-1595432541891-a461100d3054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          id:4
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty+=1;
    this.setState({
      products:products
    });
  }
  handleDecreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===0){
      return;
    }
    products[index].qty-=1;
    this.setState({
      products:products
    });
  }
  handleDeleteProduct = (id) =>{
    const {products} = this.state;
    const items = products.filter((item)=>item.id!==id);
    this.setState({
      products:items
    });
  }
  getCartCount = () =>{
    const {products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    });
    return count;
  }
  getCartTotal = () =>{
    const {products} = this.state;
    let cartTotal=0;
    products.forEach((product)=>{
      cartTotal+=product.qty * product.price;
    });
    return cartTotal;
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products= { products }
          onIncreaseQuantity={ this.handleIncreaseQuantity }
          onDecreaseQuantity={ this.handleDecreaseQuantity }
          onDeleteProduct={ this.handleDeleteProduct }
        />
        <div style={{padding:10, fontSize:25, marginLeft:150}} >TOTAL : {this.getCartTotal() }</div>
      </div>
    );
  }
}

export default App;
