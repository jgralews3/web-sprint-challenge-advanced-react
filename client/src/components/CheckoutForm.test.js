import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

const setup = (field) => {
    const utils = render(<CheckoutForm />)
    const input = utils.getByTestId(field)
    return {
      input,
      ...utils,
    }
  }

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />)
    getByText(/checkout form/i)

});

test("form shows success message on submit with form details", () => {
    const {getByText} = render(<CheckoutForm />)
    fireEvent.click(getByText('Checkout'))
    getByText(/You have ordered some plants/i)
});
