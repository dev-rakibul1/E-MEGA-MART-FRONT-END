"use client";

import {
  FilterOutlined,
  FireOutlined,
  ShoppingCartOutlined,
  StarFilled,
  ThunderboltOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Carousel,
  Checkbox,
  Col,
  Image,
  Input,
  Pagination,
  Rate,
  Row,
  Select,
  Slider,
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
  category: string;
  brand: string;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
}

const ProductMainPage: React.FC = () => {
  // Sample product data
  const [products, setProducts] = useState<Product[]>([
    {
      id: "galaxy-s22-ultra",
      name: "Galaxy S22 Ultra",
      price: 1019.99,
      originalPrice: 1199.99,
      discount: 15,
      rating: 4.8,
      reviewCount: 1245,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743320499/Galaxy_M13_iw4ndr_1_rgclsb.webp",
      category: "Electronics",
      brand: "Samsung",
      stock: 5,
      isNew: true,
      isFeatured: true,
      isBestSeller: true,
      tags: ["5G", "Wireless Charging", "S Pen"],
    },
    {
      id: "iphone-13-pro",
      name: "iPhone 13 Pro",
      price: 999.99,
      originalPrice: 1099.99,
      discount: 9,
      rating: 4.7,
      reviewCount: 980,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743320499/Galaxy_M13_iw4ndr_1_rgclsb.webp",
      category: "Electronics",
      brand: "Apple",
      stock: 12,
      isBestSeller: true,
      tags: ["5G", "Face ID", "Pro Camera"],
    },
    {
      id: "oneplus-10-pro",
      name: "OnePlus 10 Pro",
      price: 899.99,
      originalPrice: 999.99,
      discount: 10,
      rating: 4.6,
      reviewCount: 756,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743320499/Galaxy_M13_iw4ndr_1_rgclsb.webp",
      category: "Electronics",
      brand: "OnePlus",
      stock: 8,
      isNew: true,
      tags: ["5G", "Fast Charging", "OxygenOS"],
    },
    {
      id: "air-jordan-1",
      name: "Air Jordan 1 Retro",
      price: 180.0,
      originalPrice: 200.0,
      discount: 10,
      rating: 4.9,
      reviewCount: 342,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743320499/Galaxy_M13_iw4ndr_1_rgclsb.webp",
      category: "Fashion",
      brand: "Nike",
      stock: 3,
      isFeatured: true,
      tags: ["Retro", "Limited Edition"],
    },
    {
      id: "instant-pot",
      name: "Instant Pot Duo 7-in-1",
      price: 89.99,
      originalPrice: 99.99,
      discount: 10,
      rating: 4.8,
      reviewCount: 12500,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743320499/Galaxy_M13_iw4ndr_1_rgclsb.webp",
      category: "Home & Kitchen",
      brand: "Instant Pot",
      stock: 25,
      isBestSeller: true,
      tags: ["Multi-cooker", "Pressure Cooker"],
    },
    {
      id: "sony-wh-1000xm4",
      name: "Sony WH-1000XM4",
      price: 348.0,
      originalPrice: 399.99,
      discount: 13,
      rating: 4.8,
      reviewCount: 8765,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743320499/Galaxy_M13_iw4ndr_1_rgclsb.webp",
      category: "Electronics",
      brand: "Sony",
      stock: 7,
      tags: ["Noise Cancelling", "Wireless"],
    },
  ]);

  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  // Get unique categories, brands, and tags
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const tags = Array.from(new Set(products.flatMap((p) => p.tags || [])));

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Category filter
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false;
    }

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Rating filter
    if (
      selectedRatings.length > 0 &&
      !selectedRatings.some((r) => product.rating >= r)
    ) {
      return false;
    }

    // Tag filter
    if (
      selectedTags.length > 0 &&
      !selectedTags.some((t) => product.tags?.includes(t))
    ) {
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

  // Featured products for carousel
  const featuredProducts = products.filter((p) => p.isFeatured);

  return (
    <div className="product-main-page" style={{ padding: "24px" }}>
      {/* Hero Carousel */}
      <Carousel autoplay effect="fade" style={{ marginBottom: "24px" }}>
        {featuredProducts?.map((product) => (
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
                height: "350px",
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
                color="orange"
                style={{ fontSize: "16px", padding: "4px 12px" }}
              >
                Featured Product
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

      {/* Highlight Sections */}
      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <FireOutlined style={{ color: "#ff4d4f", marginRight: "8px" }} />
          Hot Deals
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.discount && p.discount > 10)
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <StarFilled style={{ color: "#ffc107", marginRight: "8px" }} />
          New Arrivals
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.isNew)
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <ThunderboltOutlined
            style={{ color: "#1890ff", marginRight: "8px" }}
          />
          Best Sellers
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.isBestSeller)
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      {/* Main Product Listing */}
      <div style={{ display: "flex", marginBottom: "24px" }}>
        <Title level={2} style={{ flex: 1 }}>
          All Products
        </Title>
        <div style={{ width: "200px" }}>
          <Select
            value={sortOption}
            onChange={setSortOption}
            style={{ width: "100%" }}
          >
            <Option value="featured">Featured</Option>
            <Option value="price-low">Price: Low to High</Option>
            <Option value="price-high">Price: High to Low</Option>
            <Option value="rating">Top Rated</Option>
            <Option value="newest">Newest</Option>
            <Option value="discount">Best Discount</Option>
          </Select>
        </div>
      </div>

      <Row gutter={[24, 24]}>
        {/* Filters Sidebar */}
        <Col xs={24} md={6}>
          <Card
            title={
              <Space>
                <FilterOutlined />
                <span>Filters</span>
              </Space>
            }
            style={{ position: "sticky", top: "16px" }}
          >
            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Price Range</Title>
              <Slider
                range
                min={0}
                max={2000}
                step={10}
                defaultValue={priceRange}
                value={priceRange}
                onChange={setPriceRange}
                tipFormatter={(value) => `$${value}`}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Text>${priceRange[0]}</Text>
                <Text>${priceRange[1]}</Text>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Categories</Title>
              <Checkbox.Group
                options={categories}
                value={selectedCategories}
                onChange={(values) => setSelectedCategories(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Brands</Title>
              <Checkbox.Group
                options={brands}
                value={selectedBrands}
                onChange={(values) => setSelectedBrands(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Customer Rating</Title>
              <Checkbox.Group
                options={[
                  { label: "★★★★★ (4.5 & up)", value: 4.5 },
                  { label: "★★★★☆ (4.0 & up)", value: 4 },
                  { label: "★★★☆☆ (3.0 & up)", value: 3 },
                ]}
                value={selectedRatings}
                onChange={(values) => setSelectedRatings(values as number[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            {tags.length > 0 && (
              <div style={{ marginBottom: "24px" }}>
                <Title level={5}>Features</Title>
                <Checkbox.Group
                  options={tags}
                  value={selectedTags}
                  onChange={(values) => setSelectedTags(values as string[])}
                  style={{ display: "flex", flexDirection: "column" }}
                />
              </div>
            )}

            <Button
              type="default"
              block
              onClick={() => {
                setPriceRange([0, 2000]);
                setSelectedCategories([]);
                setSelectedBrands([]);
                setSelectedRatings([]);
                setSelectedTags([]);
              }}
            >
              Clear All Filters
            </Button>
          </Card>
        </Col>

        {/* Product List */}
        <Col xs={24} md={18}>
          <div style={{ marginBottom: "16px" }}>
            <Search
              placeholder="Search products..."
              allowClear
              enterButton
              size="large"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {paginatedProducts.length > 0 ? (
            <>
              <Row gutter={[16, 16]}>
                {paginatedProducts.map((product) => (
                  <Col key={product.id} xs={24} sm={12} lg={8}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>

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
            </>
          ) : (
            <Card style={{ textAlign: "center", padding: "40px" }}>
              <Title level={4}>No products found</Title>
              <Text type="secondary">
                Try adjusting your filters or search query
              </Text>
              <div style={{ marginTop: "16px" }}>
                <Button
                  type="primary"
                  onClick={() => {
                    setPriceRange([0, 2000]);
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setSelectedRatings([]);
                    setSelectedTags([]);
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Badge.Ribbon
      text={
        product.isNew
          ? "NEW"
          : product.discount
          ? `${product.discount}% OFF`
          : ""
      }
      color={product.isNew ? "green" : "red"}
    >
      <Card
        hoverable
        cover={
          <Image
            src={product.image}
            alt={product.name}
            preview={false}
            style={{ height: "200px", objectFit: "contain" }}
          />
        }
        actions={[
          <Button type="primary" icon={<ShoppingCartOutlined />} block>
            Add to Cart
          </Button>,
        ]}
      >
        <div style={{ marginBottom: "8px" }}>
          <Text type="secondary">{product.brand}</Text>
        </div>
        <Title level={5} style={{ marginBottom: "8px" }} ellipsis={{ rows: 2 }}>
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
        </div>

        {product.stock < 10 && (
          <Text type="danger">Only {product.stock} left in stock!</Text>
        )}

        {product.tags && product.tags.length > 0 && (
          <div style={{ marginTop: "8px" }}>
            <Space size={[4, 4]} wrap>
              {product.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Space>
          </div>
        )}
      </Card>
    </Badge.Ribbon>
  );
};

export default ProductMainPage;
