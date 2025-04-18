import ProductDetailsCom from "@/components/productDetails/ProductDetails";

type IProps = {
  params: any;
};

const ProductDetails = ({ params }: IProps) => {
  const id = params?.id;

  return (
    <div>
      <ProductDetailsCom id={id} />
    </div>
  );
};

export default ProductDetails;
