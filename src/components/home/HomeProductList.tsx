"use client";

import ProductCart from "@/components/products/ProductCart";
import { useGetAllProductsQuery } from "@/redux/BaseQuery";
import { IProduct } from "@/types/Common";
import { Spin } from "antd";
import SectionTItle from "../shared/sectionTitle/SectionTItle";

const HomeProductListCart = () => {
  const { data, isLoading } = useGetAllProductsQuery({
    pollingInterval: 30000,
  });

  return (
    <div>
      <div className="box-container mt-80">
        {/* section title */}
        <SectionTItle
          title="Grab the best deal on"
          titleColor="Smartphones"
          btn="View"
        />
        <div className="cart-grid">
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Spin size="small" />
            </div>
          ) : (
            data?.data?.map((product: IProduct) => (
              <ProductCart key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeProductListCart;
