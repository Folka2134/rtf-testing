// import { Theme } from "@radix-ui/themes";
// import {
//   render,
//   screen,
//   waitForElementToBeRemoved,
// } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { Category, Product } from "../../src/entities";
// import BrowseProducts from "../../src/pages/BrowseProductsPage";
// import { CartProvider } from "../../src/providers/CartProvider";
// import { db, getProductsByCategory } from "../mocks/db";
// import { simulateDelay, simulateError } from "../utils";
// import AllProviders from "../AllProviders";
//
// describe("BrowseProductsPage", () => {
//   it("should show a loading skeleton when fetching categories", () => {
//   it("should hide the loading skeleton after categories are fetched", async () => {
//   it("should show a loading skeleton when fetching products", () => {
//   it("should hide the loading skeleton after products are fetched", async () => {
//   it("should not render an error if categories cannot be fetched", async () => {
//   it("should render an error if products cannot be fetched", async () => {
//   it("should render categories", async () => {
//   it("should render products", async () => {
//   it("should filter products by category", async () => {
//   it("should render all products if All category is selected", async () => {
//
// const renderComponent = () => {
//   render(<BrowseProducts />, { wrapper: AllProviders });
//
//   const getCategoriesSkeleton = () =>
//     screen.queryByRole("progressbar", {
//       name: /categories/i,
//     });
//
//   const getProductsSkeleton = () =>
//     screen.queryByRole("progressbar", { name: /products/i });
//
//   const getCategoriesComboBox = () =>
//     screen.queryByRole("combobox");
//
//   const selectCategory = async (name: RegExp | string) => {
//     await waitForElementToBeRemoved(getCategoriesSkeleton);
//     const combobox = getCategoriesComboBox();
//     const user = userEvent.setup();
//     await user.click(combobox!);
//
//     const option = screen.getByRole("option", { name });
//     await user.click(option);
//   };
//
//   const expectProductsToBeInTheDocument = (
//     products: Product[]
//   ) => {
//     const rows = screen.getAllByRole("row");
//     const dataRows = rows.slice(1);
//     expect(dataRows).toHaveLength(products.length);
//
//     products.forEach((product) => {
//       expect(screen.getByText(product.name)).toBeInTheDocument();
//     });
//   };
//
//   return {
//     getProductsSkeleton,
//     getCategoriesSkeleton,
//     getCategoriesComboBox,
//     selectCategory,
//     expectProductsToBeInTheDocument,
//   };
// };
