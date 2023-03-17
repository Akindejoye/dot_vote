import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Ballot from "./Ballot";

test("button should be rendered", () => {
  render(<Ballot />);
  const voteButton = screen.getByRole("button");
  expect(voteButton).toBeInTheDocument();
});

test("button should be disabled", () => {
  render(<Ballot />);
  const voteButton = screen.getByRole("button");
  expect(voteButton).toBeDisabled();
});