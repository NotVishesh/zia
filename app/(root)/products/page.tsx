import { getAllProducts } from '@/sanity/lib/getAllProducts';

async function page() {
  const products = await getAllProducts();
  return (
    <></>
    // <div>
    //   {products.map((product) => (
    //     <div key={product._id}>
    //       <h2>{product.name}</h2>
    //       <p>{product.description}</p>
    //       <p>{product.price}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default page