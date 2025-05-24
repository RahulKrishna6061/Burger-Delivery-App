import React, { useReducer, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const initialState = { count: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { count: state.count + 1 };
    case "REMOVE_FROM_CART":
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};

function Cards({ image, rating, title, paragraph, price, renderRatingIcons,id }) {
  const [addedToCart, setAddedToCart] = useState(false);
  // const [cartState, dispatch] = useCart()
  const [cartState, dispatch] = useReducer(cartReducer,initialState)

  const handleAddToCart = () => {
    setAddedToCart(true);
    dispatch({ type: "ADD_TO_CART"
      // , payload: { id, title, image, price }
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART",
      //  payload: { id } 
      });
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">₹{price}</h5>
            </div>
            <div className="add_to_card">
              {!addedToCart || cartState.count === 0 ? (
                // Show "Add To Cart" link if item not added
                <Link to="/" onClick={handleAddToCart}>
                  <i className="bi bi-bag me-2"></i>
                  Add To Cart
                </Link>
              ) : (
                // Show counter (+ and -) buttons if item added to cart
                <div>
                  <button
                    className="decrease_item_btn"
                    onClick={handleRemoveFromCart}
                  >
                    ‒
                  </button>
                  <span className="cart_count">{cartState.count}</span>
                  <button
                    className="increase_item_btn"
                    onClick={handleAddToCart}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
