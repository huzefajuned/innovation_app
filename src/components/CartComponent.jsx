// CartComponent.js

const CartComponent = ({ cartCount, totalAmount }) => {
  return (
    <div>
      <p>Cart: {cartCount} items</p>
      <p>Total: ${totalAmount}</p>
    </div>
  );
};

export default CartComponent;
