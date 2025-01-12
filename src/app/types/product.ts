// types/product.ts
export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  category: {
    name: string;
  };
  quantity?: number; // Add this field to store the quantity of the product in the cart
}
