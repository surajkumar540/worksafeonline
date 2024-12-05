import { Fetch, Post } from "@/utils/axios";

interface Product {
  ID?: string;
  Quantity?: number;
  Size_Sequence_No?: number;
  Colour_Sequence_No?: number;
  Fitting_Sequence_No?: number;
}

/**
 * Adds a product to the cart.
 * @async
 * @param {Product} product - The product details to add to the cart.
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The response from the API.
 */
export const addToCart = async (product: Product): Promise<any> => {
  try {
    const response = await Post(`api/AddToCart1`, {});
    console.log("Add to cart response:", response, product);
    return response;
  } catch (error: any) {
    console.error("Error adding product to cart:", error.message);
    throw new Error("Failed to add product to the cart.");
  }
};

/**
 * Removes a product from the cart.
 * @async
 * @param {string} productId - The ID of the product to remove.
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The response from the API.
 */
export const removeProduct = async (productId: string): Promise<any> => {
  try {
    const response = await Post(`api/RemoveProduct`, {
      ID: productId,
    });
    console.log("Remove product response:", response);
    return response;
  } catch (error: any) {
    console.error("Error removing product from cart:", error.message);
    throw new Error("Failed to remove product from the cart.");
  }
};

/**
 * Updates the quantity of a product in the cart.
 * @async
 * @param {string} productId - The ID of the product to update.
 * @param {number} quantity - The new quantity for the product.
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The response from the API.
 */
export const updateQuantity = async (
  productId: string,
  quantity: number
): Promise<any> => {
  try {
    const response = await Post(`api/CartQtyCh`, {
      ID: productId,
      Quantity: quantity,
    });
    console.log("Update quantity response:", response);
    return response;
  } catch (error: any) {
    console.error("Error updating product quantity:", error.message);
    throw new Error("Failed to update product quantity in the cart.");
  }
};

/**
 * Retrieves the details of the cart.
 * @async
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The cart details from the API.
 */
export const getCartDetails = async (deviceId: string): Promise<any> => {
  try {
    const response = await Fetch(`api/Cart?DeviceID=` + deviceId);
    console.log("Get cart details response:", response);
    return response;
  } catch (error: any) {
    console.error("Error fetching cart details:", error.message);
    throw new Error("Failed to fetch cart details.");
  }
};

/**
 * Generates a unique device ID.
 * @async
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<string>} The generated device ID.
 */
export const generateDeviceId = async (): Promise<string> => {
  try {
    const response: string = await Fetch(`api/DeviceID`);
    console.log("Device ID response:", response);
    return response;
  } catch (error: any) {
    console.error("Error generating device ID:", error.message);
    throw new Error("Failed to generate device ID.");
  }
};
