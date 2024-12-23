"use client";

import { useEffect, useState } from "react";

interface IProduct {
  id: number;
  name: string;
  description: string;
}

function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log("Data From Client", products);

  useEffect(() => {
    async function fetchProdcuts() {
      const data = await (
        await fetch("http://kidskiosk.runasp.net/api/Product/get-all-products")
      ).json();
      setProducts(data.data);
    }
    fetchProdcuts();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl mt-4">Fetch Products on Client</h1>
      {products.map((product) => {
        return (
          <div key={product.id} className="text-center my-5">
            <h2 className="text-orange-500">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
