
interface Params {
  productByCatagories: string;
}

function page({params}: { params: Params }) {
  return (
    <div>TODO : fetch all the products of category the Catagory {params.productByCatagories}</div>
  )
}

export default page