// // Cart.js
// import React from 'react';
// import { useCart } from './CartContext';

// const Cart = () => {
//   const { state } = useCart();

//   const calculateTotal = () => {
//     return state.items.reduce((total, item) => total + item.price * item.count, 0);
//   };

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {state.items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {state.items.map((item) => (
//               <li key={item.id}>
//                 <img src={item.image} alt={item.title} />
//                 <span>{item.title}</span>
//                 <span>₹{item.price}</span>
//                 <span>Quantity: {item.count}</span>
//               </li>
//             ))}
//           </ul>
//           <h3>Total: ₹{calculateTotal()}</h3>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
