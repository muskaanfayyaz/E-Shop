// /sanity/lib/getProductsByCategory.ts
import { client } from './client' // Import the Sanity client

export async function getProductsByCategory(categorySlug: string) {
  const query = `*[_type == "product" && category->slug.current == $categorySlug] {
    name,
    price,
    description,
    slug,
    image {
      asset->{
        url
      }
    }
  }`

  const products = await client.fetch(query, { categorySlug })
  return products
}
