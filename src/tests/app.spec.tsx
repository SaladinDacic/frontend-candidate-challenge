import React from 'react';

import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    expect(screen.getByText("Buy milk")).toBeDefined();
    screen.getByTestId("todo0");

    expect(screen.getByText("Buy bread")).toBeDefined();
    screen.getByTestId("todo1");

    // TODO: Verify second todo
  });
  
  // TODO: Test app functionality: Create, edit, delete, mark as done.
});
