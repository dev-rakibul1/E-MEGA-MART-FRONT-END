"use client";
import { IProducts } from "@/types/Common";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, List, Rate, Space, Tag } from "antd";

type IProps = {
  data?: IProducts;
};
const ProductContent = ({ data }: IProps) => {
  console.log(data);

  return (
    <div>
      <article>
        <h1>{data?.name || "N/A"}</h1>

        {/* Rating */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Rate
            allowHalf
            defaultValue={data?.rating}
            disabled
            style={{ marginRight: 8 }}
          />
          <span>({data?.reviews?.length} reviews)</span>
        </div>

        {/* Feture */}
        {data?.isNew && (
          <Tag color="green" style={{ marginBottom: 8 }}>
            NEW
          </Tag>
        )}
        {data?.isFeatured && (
          <Tag color="orange" style={{ marginBottom: 8 }}>
            FEATURED
          </Tag>
        )}
        {data?.stock && data?.stock < 10 && (
          <Tag color="red" style={{ marginBottom: 8 }}>
            Only {data?.stock} left in stock!
          </Tag>
        )}

        {/* Price */}
        {data?.price && (
          <div style={{ marginBottom: 16 }}>
            <span
              style={{ fontSize: 24, fontWeight: "bold", color: "#1890ff" }}
            >
              ${data.price.toFixed(2)}
            </span>
            {data.originalPrice && (
              <>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#888",
                    marginLeft: 8,
                  }}
                >
                  ${data.originalPrice.toFixed(2)}
                </span>
                <span style={{ color: "#ff4d4f", marginLeft: 8 }}>
                  Save ${(data.originalPrice - data.price).toFixed(2)} (
                  {data.discount}% OFF)
                </span>
              </>
            )}
          </div>
        )}

        {/* Color */}
        {data?.variants && (
          <div style={{ marginBottom: 16 }}>
            <h3>Color: </h3>
            <Space size={8}>
              {data?.variants.map((color) => (
                <Badge
                  key={color.color}
                  color={color.color}
                  style={{
                    cursor: color.color ? "pointer" : "not-allowed",
                    opacity: color.color ? 1 : 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border:
                      color?.color === color.color
                        ? "2px solid #1890ff"
                        : "1px solid #d9d9d9",
                    borderRadius: "50%",
                    width: 24,
                    height: 24,
                  }}
                  // onClick={() =>
                  //   color.color && handleColorSelect(color.name)
                  // }
                  title={color.color}
                />
              ))}
            </Space>
          </div>
        )}

        {/* Mobile variants */}
        {data?.variants && (
          <div style={{ marginBottom: 16 }}>
            <h3>Storage</h3>
            <Space size={8}>
              {data?.variants.map((storage) => (
                <Button
                  size="small"
                  key={storage?.imeiNumber}
                  //   type={selectedStorage === storage ? "primary" : "default"}
                  // onClick={() => handleStorageSelect(storage)}
                >
                  {`${storage?.ram}/${storage?.rom}`}
                </Button>
              ))}
            </Space>
          </div>
        )}

        {/* Add to card */}
        <Space size={16} style={{ marginBottom: 24 }}>
          <Button
            type="primary"
            size="large"
            icon={<ShoppingCartOutlined />}
            style={{ backgroundColor: "#ff4d4f", borderColor: "#ff4d4f" }}
          >
            Add to Cart
          </Button>
          <Button size="large" icon={<HeartOutlined />}>
            Wishlist
          </Button>
        </Space>

        {/* Highlight feature */}
        {data?.features && (
          <div>
            <h3>Highlights</h3>
            <ul>
              {data?.features.map((feature, index) => (
                <List key={index}>{feature}</List>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
};

export default ProductContent;
