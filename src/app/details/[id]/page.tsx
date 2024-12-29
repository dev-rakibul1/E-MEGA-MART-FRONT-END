"use client";

import HomeProductDetailsPage from "@/components/home/HomeProductDetails";
import { useGetSingleProductsQuery } from "@/redux/BaseQuery";
import { IProduct } from "@/types/Common";
import { Spin } from "antd";

interface Params {
  id: string;
}

interface Props {
  params: Params;
}

const HomeProductDetails = ({ params }: Props) => {
  console.log(params);

  const id = params?.id;
  const { data, isLoading } = useGetSingleProductsQuery(id);

  const product: IProduct = data?.data;

  return (
    <div className="box-container">
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
        <HomeProductDetailsPage product={product} />
      )}
    </div>
  );
};

export default HomeProductDetails;
