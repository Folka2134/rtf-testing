import { render, screen } from "@testing-library/react";
import AuthStatus from "../../src/components/AuthStatus";
import { mockAuthState } from "../utils";

describe("AuthStatus", () => {
  // "should render the loading message while fetching the auth status"
  it("should render the loading message while fetching the auth status", () => {
    const auth = {
      user: { id: 1, name: "folka" },
      isAuthenticated: false,
      isLoading: true,
    };
    render(<AuthStatus />);

    expect(screen.getByText(/loading.../i));
  });
  // "should rendejr the login button if the user is not authenticated"
  // should render the user name if authenticated
});
