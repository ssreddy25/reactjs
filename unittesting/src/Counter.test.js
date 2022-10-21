import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./components/Counter";

test("increments counter", () => {
    render(<Counter />)

    const counter = screen.getByTestId("counter")
    const incrementBtn = screen.getByTestId("increment")


    //interact with those elements
    fireEvent.click(incrementBtn);
    

    //assert the expected result
    expect(counter).toHaveTextContent("1");

})