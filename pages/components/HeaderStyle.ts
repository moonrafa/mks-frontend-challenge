import styled from 'styled-components'
export const Wrapper = styled.header`
height: 3rem;
background-color: #0F52BA;
position: sticky;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
z-index: 10;
@media (min-width: 640px) { 
  height: 6.3125rem;
}
`
export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  padding-left: 1.25rem;
  letter-spacing: 2px;
  display: flex;
  align-items: center;

  
  

  @media (min-width: 640px) { 
  font-size: 2.5rem;
}

  span {
  padding-left: 0.3125rem;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
  @media (min-width: 640px) { 
  font-size: 1.25rem;
}
}`
export const Button = styled.button`
cursor: pointer;
padding: 0.5rem 0.5rem;
border-radius: 0.625rem;
margin-right: 1rem;
font-weight: 600;
display: flex;
align-items: center;
justify-content: space-between;
height: 1.625rem;
width: 3.25rem;
@media (min-width: 640px) { 
  height: 2.8125rem;
  width: 5.625rem;
  padding: 0.5rem 1.5rem;

}
`
