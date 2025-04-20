import { render,screen } from "@testing-library/react"
import Greet from "./greet"

test("Great render correctly", () => {
    render(<Greet />)
    const greetElement=screen.getByText(/hello/i)
    expect(greetElement).toBeInTheDocument()
})


test("Great render with  props", () => {
    render(<Greet name="John" />)
    const greetElement=screen.getByText(/hello john/i)
    expect(greetElement).toBeInTheDocument()
})