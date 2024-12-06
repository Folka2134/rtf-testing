import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { HttpResponse, delay, http } from "msw";
import ProductList from "../../src/components/ProductList";
import AllProviders from "../AllProviders";
import { db } from "../mocks/db";
import { server } from "../mocks/server";

describe("ProductList", () => {
  // it('should render the list of products', async () => {
  // it('should render no products available if no product is found', async () => {
  // it('should render an error message when there is an error', async () => {
  // it('should render a loading indicator when fetching data', async () => {
  // it('should remove the loading indicator after data is fetched', async () => {
  // it('should remove the loading indicator if data fetching fails', async () => {
});
