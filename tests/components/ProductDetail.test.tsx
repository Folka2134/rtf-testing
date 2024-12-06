import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ProductDetail from "../../src/components/ProductDetail";
import { server } from "../mocks/server";
import { http, HttpResponse, delay } from "msw";
import { db } from "../mocks/db";
import AllProviders from "../AllProviders";

// describe("ProductDetail", () => {
//   // it('should render product details', async () => {
//   // it('should render message if product not found', async () => {
//   // it('should render an error for invalid productId', async () => {
//   //   it('should render an error if data fetching fails', async () => {
//   // it('should render a loading indicator when fetching data', async () => {
//   // it('should remove the loading indicator after data is fetched', async () => {
//   // it('should remove the loading indicator if data fetching fails', async () => {
// });
