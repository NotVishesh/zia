import getProductDetail from "@/sanity/lib/getProductDetail";
import getProductDescription from "@/utils/getProductDescription";

async function page({ params }: { params: { productid: string } }) {
  const {productid} = await params
  const product = await getProductDetail(productid);
  // const {productName , price}
  const description = await product.data[0].description[0].children[0].text;
  
  console.log(description);
  
  // console.log(product);

  return (
    <div>page: {product ? JSON.stringify(product) : "Loading..."}</div>
  );
}

export default page;
