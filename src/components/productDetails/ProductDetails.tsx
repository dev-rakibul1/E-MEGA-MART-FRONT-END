import { products } from "@/constant/constant";
import { IProducts } from "@/types/Common";
import { Col, Row } from "antd";
import ContentTabs from "./ContentTabs/ContentTabs";
import { ImagePreview } from "./ImagePreview/ImagePreview";
import ProductContent from "./ProductContent/ProductContent";
import ProductSlider from "./SamillerSide/Slide";

const ProductDetails = ({ id }: { id: string }) => {
  const data = products?.find((pro: IProducts) => pro.id === id);

  return (
    <div className="box-container mt-50">
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <ImagePreview data={data} />
          {/* <ImagePreview data={data} /> */}
        </Col>
        <Col xs={24} sm={12} md={16} lg={16} xl={16}>
          <ProductContent data={data} />
        </Col>
      </Row>

      {/* Details tabs */}
      <ContentTabs data={data} />

      {/* Samiller product */}
      <ProductSlider data={data} />
    </div>
  );
};

export default ProductDetails;
