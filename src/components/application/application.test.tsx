import { render,screen } from "@testing-library/react"
import Application from "./application"

describe("Application", () => {   

test("renders correctly", () => {
    render(<Application />)

    const headingElement=screen.getByRole("heading",{name:"Job Application From"})
    expect(headingElement).toBeInTheDocument()

    const sectionElement=screen.getByRole("heading",{name:"Section 1"})
    expect(sectionElement).toBeInTheDocument()


   const nameElement=screen.getByRole("textbox",{name:"Name"} )
   expect(nameElement).toBeInTheDocument()

   const bioElement=screen.getByRole("textbox",{name:"Bio"})
   expect(bioElement).toBeInTheDocument()

   const jobElement=screen.getByRole("combobox")
   expect(jobElement).toBeInTheDocument()
   
   const termsElememt=screen.getByRole('checkbox')

   expect(termsElememt).toBeInTheDocument()

   const buttonElement=screen.getByRole("button")
   expect(buttonElement).toBeInTheDocument()
   expect(buttonElement).toHaveTextContent("Submit")
}
)
})