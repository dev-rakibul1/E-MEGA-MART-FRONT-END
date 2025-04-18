import { IProducts } from "@/types/Common";
import { Tabs, TabsProps } from "antd";
import Description from "./ContentTabsChild/Descriptions";
import ProductFAQ from "./ContentTabsChild/ProductFAQ";
import ReviewSection from "./ContentTabsChild/ProductReviews";
import ProductSpecifications from "./ContentTabsChild/Specifications";

type IProps = {
  data?: IProducts;
};

const ContentTabs = ({ data }: IProps) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Specifications",
      children: <ProductSpecifications />,
    },
    {
      key: "2",
      label: "Descriptions",
      children: <Description data={data} />,
    },

    {
      key: "3",
      label: "Reviews",
      children: <ReviewSection data={data} />,
    },
    {
      key: "4",
      label: "FAQ",
      children: <ProductFAQ data={data} />,
    },
  ];

  return (
    <div>
      <Tabs items={items} />
    </div>
  );
};

export default ContentTabs;
