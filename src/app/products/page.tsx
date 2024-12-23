interface IProduct {
  id: number;
  name: string;
  description: string;
}

function fetchProdcuts() {
  return fetch("http://kidskiosk.runasp.net/api/Product/get-all-products")
    .then((res) => res.json())
    .then((json) => json.data);
}

async function Products() {
  const products: IProduct[] = await fetchProdcuts();
  console.log(products);

  return (
    <div>
      <h1 className="text-center text-2xl mt-4">Fetch Products on Server</h1>
      {products.map((product) => {
        return (
          <div key={product.id} className="text-center my-5">
            <h2 className="text-blue-500">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
