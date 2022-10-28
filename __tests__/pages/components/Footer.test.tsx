import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Footer from "../../../pages/components/Footer"

// describe('Footer component', () => {
//   it('should be able to render correctly', () => {
//     const { getByText } = render(<Footer />)

//     expect(getByText('MKS sistemas © Todos os direitos reservados')).toBeInTheDocument()
//   })
// })

test('renders learn react link', () => {
  render(<Footer />)
  const footerText = screen.getByText(/MKS sistemas © Todos os direitos reservados/i) //case insensitive
  expect(footerText).toBeInTheDocument()
})