"use client";

import { useGetAllCategoriesQuery } from "@/redux/BaseQuery";
import { ThemeColors } from "@/theme/color";
import { ICategory } from "@/types/Common";
import { Spin, Typography } from "antd";
import Image from "next/image";
import SectionTItle from "../shared/sectionTitle/SectionTItle";
import "./Home.css";

const { Text } = Typography;

const HomeCategories = () => {
  const { data, isLoading } = useGetAllCategoriesQuery({
    pollingInterval: 30000,
  });

  console.log(data?.data);

  const categories: ICategory[] = data?.data;

  return (
    <div className="box-container mt-50">
      <SectionTItle title="Shop From" titleColor="Top Categories" btn="View" />

      {/* content */}
      <div className="categories-grid">
        {isLoading ? (
          <div>
            <Spin size="small" />
          </div>
        ) : (
          categories?.map((category: ICategory) => (
            <div className="categories-child" key={category._id}>
              {/* image */}
              <div
                className="category-image-area"
                style={{
                  border: `1px solid ${ThemeColors.colorBorder}`,
                  background: ThemeColors.colorPrimaryLight,
                }}
              >
                <Image
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  src={category?.imageUrl}
                  alt={`Slide ${category?._id}`}
                  width={300}
                  height={150}
                  style={{ borderRadius: "8px" }}
                  priority
                />
                {/* <Image src={category?.imageUrl}  alt="categories" /> */}
              </div>

              {/* content */}
              <article
                style={{
                  fontWeight: "500",
                  fontSize: "19px",
                  marginTop: "15px",
                }}
              >
                <Text>{category.category}</Text>
              </article>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeCategories;
