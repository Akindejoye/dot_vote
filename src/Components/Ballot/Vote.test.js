import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Ballot from "./Ballot";

test("button should be rendered", () => {
  render(<Ballot />);
  const voteButton = screen.getByRole("button");
  expect(voteButton).toBeInTheDocument()
})