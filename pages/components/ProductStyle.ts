import styled from 'styled-components'
export const Container = styled.div`
color: #000;
background: #fff;
height: 20.5rem;
width: 15.6875rem;
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.20);
border-radius: 8px;
margin: 3rem;
position: relative;
@media (min-width: 640px) { 
  width: 217px;
  height: 350px;
}


p {
  font-weight: 300;
  font-size: 0.625rem;
  padding: 0.5rem 1rem;
  color: #2c2c2c;

}

`

export const WrapperProduct = styled.div`



`
export const PriceNameWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1rem;


h3{
  font-size: 1rem;
  font-weight: 400;
  color: #2c2c2c;
  
}
h6 {
  background-color: #373737;
  height: 1.875rem;
  width: 4.625rem;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  padding-top: 0.4rem;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  white-space: nowrap;
}
`
export const Button = styled.button`
width: 100%;
position: absolute;
bottom: 0;
height: 2.25rem;

border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
background-color: #0F52BA;
color: #fff;
text-transform: uppercase;
@media (min-width: 640px) { 
  height: 31px;
}
`
