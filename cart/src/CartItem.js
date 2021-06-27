import React from 'react';

const CartItem = (props)=>{
    const {title, price, qty, img } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct }=props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img} alt="product-pic"/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}} >{title}</div>
                <div style={{color:'#ccc'}} >Rs: {price}</div>
                <div style={{color:'#ccc'}} >Qty:{qty} </div>
                <div className="cart-item-actions">
                    <img 
                    alt="increase" 
                    src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1618559540~hmac=3d0a14d6af02f08f6ec82d88ef0b2fbc" 
                    className="action-icons"
                    onClick={()=> onIncreaseQuantity(product)}
                    />
                    <img 
                    alt="decrease" 
                    src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1618559583~hmac=238c2db345ab907ec95884efd083037f" 
                    className='action-icons'
                    onClick={()=>onDecreaseQuantity(product)}
                    />
                    <img 
                    alt="delete" 
                    src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1618555677~hmac=b527faa5ae7b39fe2a3aff1d2b23012d" 
                    className='action-icons'
                    onClick={()=>onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

const styles ={
    image:{
        height:130,
        width:130,
        borderRadius:5,
        background:'#ccc'
    }
}

export default CartItem;