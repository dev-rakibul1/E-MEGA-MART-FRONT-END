"use client";

import ProductCart from "@/components/products/ProductCart";
import { useGetAllProductsQuery } from "@/redux/BaseQuery";
import { IProduct } from "@/types/Common";

const Product = () => {
  const { data } = useGetAllProductsQuery({
    pollingInterval: 30000,
  });

  console.log(data?.data);

  return (
    <div>
      <div className="box-container mt-50">
        <div className="cart-grid">
          {data?.data?.map((product: IProduct) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
