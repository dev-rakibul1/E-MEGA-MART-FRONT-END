"use client";

import {
  AppstoreOutlined,
  ClockCircleOutlined,
  FilterOutlined,
  GoldOutlined,
  MobileOutlined,
  ShoppingCartOutlined,
  SkinOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Carousel,
  Col,
  Dropdown,
  Image,
  Input,
  Menu,
  Pagination,
  Rate,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import React, { useState } from "react";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: "Electronics" | "Fashion" | "Jewelry" | "Watches" | "Home";
  type: string;
  brand: string;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

const UniversalShopPage: React.FC = () => {
  // Sample products from all categories
  const [products, setProducts] = useState<Product[]>([
    // Electronics
    {
      id: "galaxy-s22",
      name: "Samsung Galaxy S22",
      price: 799.99,
      originalPrice: 899.99,
      discount: 11,
      rating: 4.7,
      reviewCount: 1245,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743320499/Galaxy_M13_iw4ndr_1_rgclsb.webp",
      category: "Electronics",
      type: "Smartphone",
      brand: "Samsung",
      stock: 15,
      isBestSeller: true,
    },
    {
      id: "airpods-pro",
      name: "Apple AirPods Pro",
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      rating: 4.8,
      reviewCount: 3421,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743329928/Apple-AirPods-Pro_b9gsky.jpg",
      category: "Electronics",
      type: "Headphones",
      brand: "Apple",
      stock: 8,
      isFeatured: true,
    },

    // Fashion
    {
      id: "denim-jacket",
      name: "Classic Denim Jacket",
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      rating: 4.5,
      reviewCount: 342,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743329928/t-shart_ypgrqv.webp",
      category: "Fashion",
      type: "Jacket",
      brand: "Levi's",
      stock: 15,
      isNew: true,
    },
    {
      id: "running-shoes",
      name: "Men's Running Shoes",
      price: 89.99,
      originalPrice: 99.99,
      discount: 10,
      rating: 4.6,
      reviewCount: 876,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743329928/shoes_oc7luc.avif",
      category: "Fashion",
      type: "Shoes",
      brand: "Nike",
      stock: 5,
    },

    // Jewelry
    {
      id: "diamond-ring",
      name: "Solitaire Diamond Ring",
      price: 1999.99,
      originalPrice: 2499.99,
      discount: 20,
      rating: 4.9,
      reviewCount: 215,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743321693/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194_x0qars.webp",
      category: "Jewelry",
      type: "Ring",
      brand: "Tiffany",
      stock: 3,
      isFeatured: true,
    },

    // Watches
    {
      id: "apple-watch",
      name: "Apple Watch Series 8",
      price: 399.99,
      originalPrice: 429.99,
      discount: 7,
      rating: 4.8,
      reviewCount: 1245,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743330063/1_pvnhdc.jpg",
      category: "Watches",
      type: "Smartwatch",
      brand: "Apple",
      stock: 12,
      isBestSeller: true,
    },

    // Home
    {
      id: "air-fryer",
      name: "Digital Air Fryer",
      price: 89.99,
      originalPrice: 99.99,
      discount: 10,
      rating: 4.7,
      reviewCount: 543,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743330268/ad_xdf8s1.jpg",
      category: "Home",
      type: "Kitchen",
      brand: "Instant Pot",
      stock: 7,
    },
  ]);

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategory !== "All" && product.category !== selectedCategory) {
      return false;
    }

    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Search filter
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case "discount":
        return (b.discount || 0) - (a.discount || 0);
      default: // 'featured'
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    }
  });

  // Pagination
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Category icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Electronics":
        return <MobileOutlined />;
      case "Fashion":
        return <SkinOutlined />;
      case "Jewelry":
        return <GoldOutlined />;
      case "Watches":
        return <ClockCircleOutlined />;
      default:
        return <AppstoreOutlined />;
    }
  };

  // Price filter dropdown
  const priceFilterMenu = (
    <Menu>
      <Menu.Item key="0-50" onClick={() => setPriceRange([0, 50])}>
        Under $50
      </Menu.Item>
      <Menu.Item key="50-100" onClick={() => setPriceRange([50, 100])}>
        $50 - $100
      </Menu.Item>
      <Menu.Item key="100-200" onClick={() => setPriceRange([100, 200])}>
        $100 - $200
      </Menu.Item>
      <Menu.Item key="200-500" onClick={() => setPriceRange([200, 500])}>
        $200 - $500
      </Menu.Item>
      <Menu.Item key="500-2000" onClick={() => setPriceRange([500, 2000])}>
        $500+
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="universal-shop-page" style={{ padding: "24px" }}>
      {/* Hero Carousel */}
      <Carousel autoplay effect="fade" style={{ marginBottom: "24px" }}>
        {products
          .filter((p) => p.isFeatured)
          .slice(0, 3)
          .map((product) => (
            <div
              key={product.id}
              style={{ position: "relative", height: "400px" }}
            >
              <Image
                src={product.image}
                alt={product.name}
                preview={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.7)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "80px",
                  left: "80px",
                  color: "white",
                  maxWidth: "50%",
                }}
              >
                <Tag
                  color="blue"
                  style={{ fontSize: "16px", padding: "4px 12px" }}
                >
                  {getCategoryIcon(product.category)} {product.category}
                </Tag>
                <Title level={2} style={{ color: "white", margin: "16px 0" }}>
                  {product.name}
                </Title>
                <Text
                  style={{
                    color: "white",
                    fontSize: "18px",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  Now at ${product.price} (Save $
                  {(product.originalPrice || 0) - product.price})
                </Text>
                <Button type="primary" size="large">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
      </Carousel>

      {/* Category Tabs */}
      <div
        style={{
          marginBottom: "24px",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <Space size={[8, 16]} wrap>
          {categories.map((category) => (
            <Button
              key={category}
              type={selectedCategory === category ? "primary" : "default"}
              icon={getCategoryIcon(category)}
              onClick={() => setSelectedCategory(category)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0 16px",
                height: "40px",
              }}
            >
              {category}
            </Button>
          ))}
        </Space>
      </div>

      {/* Search and Filter Bar */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Search
          placeholder="Search all products..."
          allowClear
          enterButton
          size="large"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: 1, minWidth: "200px" }}
        />

        <Dropdown overlay={priceFilterMenu} placement="bottomRight">
          <Button size="large" icon={<FilterOutlined />}>
            Price: ${priceRange[0]} - ${priceRange[1]}
          </Button>
        </Dropdown>

        <Select
          value={sortOption}
          onChange={setSortOption}
          size="large"
          style={{ width: "200px" }}
        >
          <Option value="featured">Featured</Option>
          <Option value="price-low">Price: Low to High</Option>
          <Option value="price-high">Price: High to Low</Option>
          <Option value="rating">Top Rated</Option>
          <Option value="newest">Newest</Option>
          <Option value="discount">Best Discount</Option>
        </Select>
      </div>

      {/* Product Grid */}
      <Row gutter={[16, 24]}>
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <Image
                    src={product.image}
                    alt={product.name}
                    preview={false}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      padding: "16px",
                      backgroundColor: "#f8f8f8",
                    }}
                  />
                }
                actions={[
                  <Button type="primary" icon={<ShoppingCartOutlined />} block>
                    Add to Cart
                  </Button>,
                ]}
              >
                <div style={{ marginBottom: "8px" }}>
                  <Tag color="blue">{product.category}</Tag>
                  {product.isNew && <Tag color="green">NEW</Tag>}
                  {product.isBestSeller && (
                    <Tag color="orange">BEST SELLER</Tag>
                  )}
                </div>

                <Title
                  level={5}
                  style={{ marginBottom: "8px" }}
                  ellipsis={{ rows: 2 }}
                >
                  {product.name}
                </Title>

                <div style={{ marginBottom: "8px" }}>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={product.rating}
                    style={{ fontSize: "14px" }}
                  />
                  <Text type="secondary" style={{ marginLeft: "8px" }}>
                    ({product.reviewCount})
                  </Text>
                </div>

                <div style={{ marginBottom: "8px" }}>
                  <Text strong style={{ fontSize: "18px", color: "#1890ff" }}>
                    ${product.price.toFixed(2)}
                  </Text>
                  {product.originalPrice && (
                    <Text delete type="secondary" style={{ marginLeft: "8px" }}>
                      ${product.originalPrice.toFixed(2)}
                    </Text>
                  )}
                  {product.discount && (
                    <Tag color="red" style={{ marginLeft: "8px" }}>
                      Save {product.discount}%
                    </Tag>
                  )}
                </div>

                <Text type="secondary">{product.brand}</Text>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Card style={{ textAlign: "center", padding: "40px" }}>
              <Title level={4}>No products found</Title>
              <Text type="secondary">
                Try adjusting your filters or search query
              </Text>
              <div style={{ marginTop: "16px" }}>
                <Button
                  type="primary"
                  onClick={() => {
                    setSelectedCategory("All");
                    setPriceRange([0, 2000]);
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </Card>
          </Col>
        )}
      </Row>

      {/* Pagination */}
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredProducts.length}
          onChange={(page, size) => {
            setCurrentPage(page);
            setPageSize(size);
          }}
          showSizeChanger
          showQuickJumper
        />
      </div>
    </div>
  );
};

export default UniversalShopPage;
