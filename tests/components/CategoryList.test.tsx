import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import CategoryList from "../../src/components/CategoryList";
import { Category } from "../../src/entities";
import AllProviders from "../AllProviders";
import { db } from "../mocks/db";
import { simulateDelay, simulateError } from "../utils";

describe("CategoryList", () => {
  // it("should render a list of categories", async () => {
  // it("should render a loading message when fetching categories", () => {
  // it("should render an error message if fetching categories fails", async () => {
});
