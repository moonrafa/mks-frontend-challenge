import React from 'react'
import { Button, Logo, Wrapper } from './HeaderStyle'
import { HiShoppingCart } from "react-icons/hi";

// import { useAppSelector } from '../../hooks/store'
// import { useCart } from '../../hooks/cart'
//  const { toggleSidebarCart } = useCart()
  // const products = useAppSelector(state => state.products)

  // const productAmount = products.reduce((acc, product) => {
  //   return product.amount * 1 + acc
  // }, 0)

type Props = {}

const Header = (props: Props) => {
  return (
    <Wrapper>
      <Logo data-testid="logo">MKS <span> Sistemas</span></Logo>
      <Button /*onClick={toggleSidebarCart}*/>
        <HiShoppingCart size={14}/><span data-testid="product-amount">{/*productAmount} */} {0}</span>
      </Button>
    </Wrapper>

  )
}

export default Header