/**
 * Greet should render teh text hello and if a name is passed into the component
 * it should render hello followd by the name
 * 
 */
import { render,screen } from "@testing-library/react"
import { Greet } from "../components/greet/Greet"
// describe("Greet",()=>{

//     it("testing greeet rending",()=>{
//         render(<Greet/>)
//         const TestElement= screen.getByText(/hello/i)
//         expect(TestElement).toBeInTheDocument()
//     })
    
//     it("Greet renders with a name",()=>{
//         render(<Greet name="rahul"/>)
        
//         const TestElement= screen.getByText(/hello rahul/i)
//         expect(TestElement).toBeInTheDocument()
//     })
// })