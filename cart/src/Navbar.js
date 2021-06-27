import React from 'react';

const Navbar = (props) =>{
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img 
                style={styles.cartIcon}
                alt="cart-icon" 
                src="https://www.flaticon.com/svg/vstatic/svg/3144/3144456.svg?token=exp=1618559904~hmac=8e50bdf1154de116282568138909b5fa"
                />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 100,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative',
      marginRight:20
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -12
    }
  };

export default Navbar;