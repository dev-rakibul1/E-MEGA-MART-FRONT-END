"use client";

import { products } from "@/constant/constant";
import { faq, IProducts } from "@/types/Common";
import {
  CheckOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import type { RadioChangeEvent, TabsProps } from "antd";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Col,
  Collapse,
  Comment,
  Divider,
  Image,
  Input,
  List,
  Radio,
  Rate,
  Row,
  Slider,
  Space,
  Table,
  Tabs,
  Tag,
} from "antd";
import { useState } from "react";

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { TextArea } = Input;

type IProps = {
  id: string;
};

const ProductDetailsCom = ({ id }: IProps) => {
  console.log(id);
  const productsData = products?.find((p: IProducts) => p?.id === id);

  const product = productsData;
  const reviews = productsData?.reviews;
  const questions = productsData?.faqs;

  // State for product options
  // const [selectedColor, setSelectedColor] = useState<string>(
  //   product?.colors[0]?.name
  // );
  // const [selectedStorage, setSelectedStorage] = useState<string>(
  //   product?.storageOptions?.[0] || ""
  // );
  const [deliveryOption, setDeliveryOption] = useState<string>("standard");
  // const [quantity, setQuantity] = useState<number>(1);

  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 1500]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["Samsung"]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["5G"]);

  // Tab state
  const [activeTab, setActiveTab] = useState<string>("description");

  // Review form state
  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    title: "",
    content: "",
  });

  // Question form state
  const [questionForm, setQuestionForm] = useState("");

  // Handle color selection
  // const handleColorSelect = (colorName: string) => {
  //   setSelectedColor(colorName);
  // };

  // // Handle storage selection
  // const handleStorageSelect = (storage: string) => {
  //   setSelectedStorage(storage);
  // };

  // Handle delivery option change
  const handleDeliveryChange = (e: RadioChangeEvent) => {
    setDeliveryOption(e.target.value);
  };

  // Handle tab change
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  // Handle review submission
  // const handleReviewSubmit = () => {
  //   const newReview: Review = {
  //     id: `review-${Date.now()}`,
  //     user: "You",
  //     avatar: "",
  //     rating: reviewForm.rating,
  //     date: new Date().toLocaleDateString("en-US", {
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     }),
  //     title: reviewForm.title,
  //     content: reviewForm.content,
  //     verified: false,
  //   };

  //   // setReviews([...reviews, newReview]);
  //   // setReviewForm({ rating: 0, title: "", content: "" });
  // };

  // Handle question submission
  const handleQuestionSubmit = () => {
    const newQuestion: faq = {
      id: `question-${Date.now()}`,
      user: "You",
      question: questionForm,
      answers: [],
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    // setQuestions([...questions, newQuestion]);
    setQuestionForm("");
  };

  // Calculate rating distribution
  // const ratingDistribution = {
  //   5: Math.floor(
  //     (reviews?.filter((r) => r.rating === 5)?.length / reviews?.length) * 100
  //   ),
  //   4: Math.floor(
  //     (reviews?.filter((r) => r.rating === 4)?.length / reviews?.length) * 100
  //   ),
  //   3: Math.floor(
  //     (reviews?.filter((r) => r.rating === 3)?.length / reviews?.length) * 100
  //   ),
  //   2: Math.floor(
  //     (reviews?.filter((r) => r.rating === 2)?.length / reviews?.length) * 100
  //   ),
  //   1: Math.floor(
  //     (reviews?.filter((r) => r.rating === 1)?.length / reviews?.length) * 100
  //   ),
  // };

  // Tab items configuration
  const tabItems: TabsProps["items"] = [
    {
      key: "description",
      label: "Description",
      children: (
        <div>
          <h3>Product Description</h3>
          <p>{product?.description}</p>
          <ul>
            {product?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      key: "specifications",
      label: "Specifications",
      children: (
        <Table
          dataSource={Object.entries(product?.features)?.map(
            ([key, value]) => ({
              key,
              name: key,
              value,
            })
          )}
          columns={[
            {
              title: "Specification",
              dataIndex: "name",
              key: "name",
              width: "30%",
            },
            {
              title: "Value",
              dataIndex: "value",
              key: "value",
            },
          ]}
          pagination={false}
          bordered={false}
        />
      ),
    },
    {
      key: "reviews",
      label: `Reviews (${reviews?.length})`,
      children: (
        <div>
          <div className="review-summary">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Rate
                allowHalf
                defaultValue={product?.rating}
                disabled
                style={{ fontSize: 24, marginRight: 8 }}
              />
              <span style={{ fontSize: 18, fontWeight: "bold" }}>
                {product?.rating.toFixed(1)} out of 5
              </span>
            </div>

            {/* <div className="rating-distribution">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div
                  key={rating}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ width: 60 }}>{rating} star</span>
                  <Progress
                    percent={
                      ratingDistribution[
                        rating as keyof typeof ratingDistribution
                      ]
                    }
                    strokeColor="#ffc107"
                    showInfo={false}
                    style={{ width: 200, margin: "0 8px" }}
                  />
                  <span>
                    {
                      ratingDistribution[
                        rating as keyof typeof ratingDistribution
                      ]
                    }
                    %
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          <Divider />

          <div className="customer-reviews">
            <List
              itemLayout="vertical"
              dataSource={reviews}
              renderItem={(review) => (
                <Comment
                  author={
                    <span>
                      {review.user}{" "}
                      {review.verified && (
                        <CheckOutlined style={{ color: "#1890ff" }} />
                      )}
                    </span>
                  }
                  avatar={
                    <Avatar
                      src={review.avatar || "/default-avatar.jpg"}
                      alt={review.user}
                    />
                  }
                  content={
                    <>
                      <Rate disabled defaultValue={review.rating} />
                      <h4>{review.title}</h4>
                      <p>{review.content}</p>
                    </>
                  }
                  datetime={<span>{review.date}</span>}
                />
              )}
            />
          </div>

          <Divider />

          <div className="review-form">
            <h3>Write a Review</h3>
            <div style={{ marginBottom: 16 }}>
              <Rate
                value={reviewForm.rating}
                onChange={(value) =>
                  setReviewForm({ ...reviewForm, rating: value })
                }
              />
            </div>
            <Input
              placeholder="Title"
              value={reviewForm.title}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, title: e.target.value })
              }
              style={{ marginBottom: 16 }}
            />
            <TextArea
              rows={4}
              placeholder="Share your thoughts about this product..."
              value={reviewForm.content}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, content: e.target.value })
              }
              style={{ marginBottom: 16 }}
            />
            <Button
              type="primary"
              // onClick={handleReviewSubmit}
              disabled={
                !reviewForm.rating || !reviewForm.title || !reviewForm.content
              }
            >
              Submit Review
            </Button>
          </div>
        </div>
      ),
    },
    {
      key: "qna",
      label: `Q&A (${questions?.length})`,
      children: (
        <div>
          <Collapse accordion>
            {questions?.map((question) => (
              <Panel
                header={question.question}
                key={question.id}
                extra={<span style={{ color: "#888" }}>{question.user}</span>}
              >
                {question.answers.length > 0 ? (
                  question.answers.map((answer) => (
                    <Comment
                      key={answer.id}
                      author={<span>{answer.user}</span>}
                      avatar={
                        <Avatar src="/default-avatar.jpg" alt={answer.user} />
                      }
                      content={<p>{answer.answer}</p>}
                      datetime={<span>{answer.date}</span>}
                    />
                  ))
                ) : (
                  <p>No answers yet. Be the first to answer!</p>
                )}
              </Panel>
            ))}
          </Collapse>

          <Divider />

          <div className="ask-question">
            <h3>Ask a Question</h3>
            <TextArea
              rows={4}
              placeholder="Have a question about this product? Ask now..."
              value={questionForm}
              onChange={(e) => setQuestionForm(e.target.value)}
              style={{ marginBottom: 16 }}
            />
            <Button
              type="primary"
              onClick={handleQuestionSubmit}
              disabled={!questionForm.trim()}
            >
              Ask Question
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="box-container">
      <div className="product-page">
        <Row gutter={[24, 24]}>
          {/* Product Images */}
          <Col xs={24} md={12} lg={10}>
            <Card
              cover={
                <Image
                  src={product?.images[0]}
                  alt={product?.name}
                  preview={{
                    toolbarRender: (
                      <span className="ant-image-preview-operations-operation">
                        <LeftOutlined />
                        <RightOutlined />
                      </span>
                    ),
                  }}
                />
              }
            >
              <Row gutter={[8, 8]}>
                {product?.images?.map((image, index) => (
                  <Col key={index} xs={6} sm={4} md={6}>
                    <Image
                      src={image}
                      alt={`${product?.name} ${index + 1}`}
                      preview={false}
                      style={{ cursor: "pointer", border: "1px solid #f0f0f0" }}
                    />
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>

          {/* Product Details */}
          <Col xs={24} md={12} lg={14}>
            <div style={{ marginBottom: 16 }}>
              <h1>{product?.name}</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Rate
                  allowHalf
                  defaultValue={product?.rating}
                  disabled
                  style={{ marginRight: 8 }}
                />
                <span>({product?.reviewsCount} reviews)</span>
              </div>

              {product?.isNew && (
                <Tag color="green" style={{ marginBottom: 8 }}>
                  NEW
                </Tag>
              )}
              {product?.isFeatured && (
                <Tag color="orange" style={{ marginBottom: 8 }}>
                  FEATURED
                </Tag>
              )}
              {product?.stock < 10 && (
                <Tag color="red" style={{ marginBottom: 8 }}>
                  Only {product?.stock} left in stock!
                </Tag>
              )}

              <div style={{ marginBottom: 16 }}>
                <span
                  style={{ fontSize: 24, fontWeight: "bold", color: "#1890ff" }}
                >
                  ${product?.price.toFixed(2)}
                </span>
                {product?.originalPrice && (
                  <>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#888",
                        marginLeft: 8,
                      }}
                    >
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span style={{ color: "#ff4d4f", marginLeft: 8 }}>
                      Save ${(product.originalPrice - product.price).toFixed(2)}{" "}
                      ({product.discount}% OFF)
                    </span>
                  </>
                )}
              </div>

              {/* {product?.colors && (
                <div style={{ marginBottom: 16 }}>
                  <h3>Color: {selectedColor}</h3>
                  <Space size={8}>
                    {product?.colors?.map((color) => (
                      <Badge
                        key={color.name}
                        color={color.hex}
                        style={{
                          cursor: color.available ? "pointer" : "not-allowed",
                          opacity: color.available ? 1 : 0.5,
                          border:
                            selectedColor === color.name
                              ? "2px solid #1890ff"
                              : "1px solid #d9d9d9",
                          borderRadius: "50%",
                          width: 24,
                          height: 24,
                        }}
                        onClick={() =>
                          color?.available && handleColorSelect(color.name)
                        }
                        title={color.name}
                      />
                    ))}
                  </Space>
                </div>
              )} */}

              {/* {product?.storageOptions && (
                <div style={{ marginBottom: 16 }}>
                  <h3>Storage</h3>
                  <Space size={8}>
                    {product?.storageOptions?.map((storage) => (
                      <Button
                        key={storage}
                        type={
                          selectedStorage === storage ? "primary" : "default"
                        }
                        onClick={() => handleStorageSelect(storage)}
                      >
                        {storage}
                      </Button>
                    ))}
                  </Space>
                </div>
              )} */}

              <div style={{ marginBottom: 24 }}>
                <h3>Delivery Options</h3>
                <Radio.Group
                  onChange={handleDeliveryChange}
                  value={deliveryOption}
                >
                  <Space direction="vertical">
                    <Radio value="standard">
                      Standard Delivery: FREE (3-5 business days)
                    </Radio>
                    <Radio value="express">
                      Express Delivery: $9.99 (1-2 business days)
                    </Radio>
                  </Space>
                </Radio.Group>
              </div>

              <Space size={16} style={{ marginBottom: 24 }}>
                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  style={{ backgroundColor: "#ff4d4f", borderColor: "#ff4d4f" }}
                >
                  Add to Cart
                </Button>
                <Button type="primary" size="large">
                  Buy Now
                </Button>
                <Button size="large" icon={<HeartOutlined />}>
                  Wishlist
                </Button>
              </Space>

              <div>
                <h3>Highlights</h3>
                <ul>
                  {product?.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        {/* Product Tabs */}
        <div style={{ marginTop: 24 }}>
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            {tabItems.map((tab) => (
              <TabPane tab={tab.label} key={tab.key}>
                {tab.children}
              </TabPane>
            ))}
          </Tabs>
        </div>

        {/* Related Products */}
        <Divider />
        <h2>You May Also Like</h2>
        <Row gutter={[16, 16]}>
          {[
            {
              id: "galaxy-s22",
              name: "Galaxy S22",
              price: 719.99,
              originalPrice: 799.99,
              image:
                "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735392718/Galaxy_M53_kfnnzo.png",
            },
            {
              id: "iphone-13",
              name: "iPhone 13",
              price: 799.99,
              originalPrice: 899.99,
              image:
                "https://res.cloudinary.com/dd7uhuhan/image/upload/v1735395016/Galaxy_S22_Ultra_lmflpd.png",
            },
            {
              id: "oneplus-10-pro",
              name: "OnePlus 10 Pro",
              price: 899.99,
              originalPrice: 999.99,
              image:
                "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743320499/Galaxy_M13_iw4ndr_1_rgclsb.webp",
            },
          ].map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <Image src={item.image} alt={item.name} preview={false} />
                }
              >
                <Card.Meta
                  title={item.name}
                  description={
                    <>
                      <div style={{ marginBottom: 8 }}>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#1890ff",
                          }}
                        >
                          ${item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "#888",
                              marginLeft: 8,
                            }}
                          >
                            ${item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button
                        type="primary"
                        block
                        icon={<ShoppingCartOutlined />}
                      >
                        Add to Cart
                      </Button>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Product Filters (can be placed in a sidebar or modal) */}
        <div className="product-filters" style={{ marginTop: 24 }}>
          <h2>Filter Products</h2>
          <div style={{ background: "#fff", padding: 16, borderRadius: 8 }}>
            <div style={{ marginBottom: 16 }}>
              <h3>Price Range</h3>
              <Slider
                range
                min={100}
                max={1500}
                defaultValue={priceRange}
                onChange={(value) => setPriceRange(value)}
                tipFormatter={(value) => `$${value}`}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <h3>Brand</h3>
              <Checkbox.Group
                options={["Samsung", "Apple", "OnePlus", "Google", "Xiaomi"]}
                value={selectedBrands}
                onChange={(checkedValues) =>
                  setSelectedBrands(checkedValues as string[])
                }
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <h3>Customer Ratings</h3>
              <Checkbox.Group
                options={[
                  { label: "★★★★★ (4.5 & above)", value: 4.5 },
                  { label: "★★★★☆ (4.0 & above)", value: 4 },
                  { label: "★★★☆☆ (3.0 & above)", value: 3 },
                ]}
                value={selectedRatings}
                onChange={(checkedValues) =>
                  setSelectedRatings(checkedValues as number[])
                }
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <h3>Features</h3>
              <Checkbox.Group
                options={[
                  "5G",
                  "Water Resistant",
                  "Wireless Charging",
                  "Expandable Storage",
                  "Dual SIM",
                ]}
                value={selectedFeatures}
                onChange={(checkedValues) =>
                  setSelectedFeatures(checkedValues as string[])
                }
              />
            </div>

            <Space>
              <Button type="primary">Apply Filters</Button>
              <Button
                onClick={() => {
                  setPriceRange([100, 1500]);
                  setSelectedBrands([]);
                  setSelectedRatings([]);
                  setSelectedFeatures([]);
                }}
              >
                Reset All
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCom;
