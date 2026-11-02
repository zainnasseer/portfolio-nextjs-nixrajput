import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders an svg with accessible name matching /zain nasseer/i", () => {
    render(<Logo />);
    expect(screen.getByRole("img", { name: /zain nasseer/i })).toBeInTheDocument();
  });

  it("renders wordmark when withWordmark is true", () => {
    render(<Logo withWordmark />);
    expect(screen.getByText("zainnasseer")).toBeInTheDocument();
  });

  it("does NOT render wordmark by default", () => {
    render(<Logo />);
    expect(screen.queryByText("zainnasseer")).not.toBeInTheDocument();
  });
});
