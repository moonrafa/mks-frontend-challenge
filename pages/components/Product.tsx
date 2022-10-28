import { ProductInterface } from "../interfaces/ProductInterface"
import React from "react"
import Image from "next/image"
import { Button, Container, PriceNameWrapper, WrapperProduct } from "./ProductStyle"
import { HiOutlineArchive } from "react-icons/hi"
import { useDispatch } from "react-redux"
import {toast} from 'react-hot-toast'
// import { numberToPrice } from '../../helpers/priceFormat';
// import { useAppDispatch } from '../../hooks/store';
// import { IProduct } from '../../interfaces/IProduct';
// import { addProduct } from '../../store/product.store';
type Props = {
  productData: ProductInterface
}

const Products = ({
  productData
}: Props) => {
  const dispatch = useDispatch()

  // function dispatchCart(){
  //   dispatch(addToCart({productData}))
  //   toast.success('produto adicionado com sucesso.')

  // }
  return (
    <Container>
      {productData && 
      (<>
      <Image src={productData.photo} alt={productData.name } height={200} width={200}/>
      <PriceNameWrapper>
      <h3>{productData.name}</h3>
      <h6>R${Math.round(parseInt(productData.price))}</h6>
      </PriceNameWrapper>
      <p> {productData.description}</p>
      <Button ata-testid="add-product-button"><HiOutlineArchive/>Comprar</Button>
      </>
     )
      } 
    </Container>
  )
}

export default Products