import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { Container, Title, Cart } from "./styles";
import { connect } from "react-redux";

function Header({ cartSize }) {
  return (
    <Container>
      <Title to="/">Rocketshoes</Title>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
