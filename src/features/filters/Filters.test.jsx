import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "./Filters";

test("renders all filter buttons", () => {
  render(<Filters setFilter={() => {}} />);

  expect(screen.getByText("All")).toBeInTheDocument();
  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("JavaScript")).toBeInTheDocument();
});

test("calls setFilter with correct value when React clicked", () => {
  const mockSetFilter = vi.fn();

  render(<Filters setFilter={mockSetFilter} />);

  fireEvent.click(screen.getByText("React"));

  expect(mockSetFilter).toHaveBeenCalledWith("reactjs");
});

test("calls setFilter with empty string when All clicked", () => {
  const mockSetFilter = vi.fn();

  render(<Filters setFilter={mockSetFilter} />);

  fireEvent.click(screen.getByText("All"));

  expect(mockSetFilter).toHaveBeenCalledWith("");
});

test("calls setFilter with javascript when JavaScript clicked", () => {
  const mockSetFilter = vi.fn();

  render(<Filters setFilter={mockSetFilter} />);

  fireEvent.click(screen.getByText("JavaScript"));

  expect(mockSetFilter).toHaveBeenCalledWith("javascript");
});