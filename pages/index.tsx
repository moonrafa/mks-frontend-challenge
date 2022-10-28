import Head from 'next/head'
import Image from 'next/image'
import { GlobalStyle } from '../styles/GlobalStyle'
import Header from './components/Header'
import Product from './components/Product'
import Footer from './components/Footer'
import { ProductInterface } from './interfaces/ProductInterface'
import { NextPage } from 'next'
import Cart from './components/Cart'
import {Toaster} from 'react-hot-toast'
import { useQuery } from 'react-query'
type requestProps = {
  products: ProductInterface[];
  count: number;
}
type Props = {
  data: requestProps;
}

 const Home: NextPage<Props> = ({data}) => {
  return (
    <div>
      <Head> 
        <title>MKS Sistemas</title>
        <meta name="description" content="Encontre tudo que você precisa e faça sua compra com segurança no MKS Sistemas." />
        <link rel="icon" href="/cart.png" />
      </Head>
      <GlobalStyle/>
      <Header/>

      <main>
      <Toaster position="top-center"/>
      {data && data.products.map((product: ProductInterface)=>
      <Product key={product.id} productData={product}/> )}
      </main>
      <Footer/>

      
    </div>
  )
}
export async function getServerSideProps() {
  const request = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC').then(res => res.json())
  const data: requestProps = request

  return {
    props: {data}
  }
}
export default Home