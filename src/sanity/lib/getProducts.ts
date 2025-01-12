// /sanity/lib/getProducts.ts
import { client } from './client'; // assuming you have a client to connect to sanity
import { Product } from '../../app/types/product';

export async function getAllProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] {
    _id,
    name,
    price,
    description,
    slug,
    image {
      asset->{
        url
      }
    },
    category->{
      name
    }
  }`;

  const products = await client.fetch(query);
  return products;
}
