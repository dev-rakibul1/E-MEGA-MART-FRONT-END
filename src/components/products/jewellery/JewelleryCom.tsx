"use client";

import {
  CrownOutlined,
  FilterOutlined,
  FireOutlined,
  GiftOutlined,
  GoldOutlined,
  ShoppingCartOutlined,
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

interface JewelleryProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: "Rings" | "Necklaces" | "Earrings" | "Bracelets" | "Watches";
  material: "Gold" | "Silver" | "Platinum" | "Diamond" | "Pearl";
  brand: string;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
  gemstone?: string;
}

const JewelleryMainPage: React.FC = () => {
  // Sample jewellery data
  const [products, setProducts] = useState<JewelleryProduct[]>([
    {
      id: "diamond-engagement-ring",
      name: "Solitaire Diamond Engagement Ring",
      price: 1999.99,
      originalPrice: 2499.99,
      discount: 20,
      rating: 4.9,
      reviewCount: 342,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743321693/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194_x0qars.webp",
      category: "Rings",
      material: "Diamond",
      brand: "Tiffany & Co.",
      stock: 3,
      isFeatured: true,
      isBestSeller: true,
      tags: ["Engagement", "Wedding", "14K Gold"],
      gemstone: "Diamond",
    },
    {
      id: "pearl-necklace",
      name: "Classic Pearl Necklace",
      price: 499.99,
      originalPrice: 599.99,
      discount: 17,
      rating: 4.7,
      reviewCount: 215,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743321693/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194_x0qars.webp",
      category: "Necklaces",
      material: "Pearl",
      brand: "Mikimoto",
      stock: 8,
      isNew: true,
      tags: ["Elegant", "Timeless"],
      gemstone: "Pearl",
    },
    {
      id: "gold-bangle",
      name: "18K Gold Bangle Bracelet",
      price: 899.99,
      originalPrice: 999.99,
      discount: 10,
      rating: 4.6,
      reviewCount: 178,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743321693/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194_x0qars.webp",
      category: "Bracelets",
      material: "Gold",
      brand: "Cartier",
      stock: 5,
      tags: ["Luxury", "Minimalist"],
    },
    {
      id: "silver-hoops",
      name: "Sterling Silver Hoop Earrings",
      price: 129.99,
      originalPrice: 149.99,
      discount: 13,
      rating: 4.5,
      reviewCount: 432,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743321693/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194_x0qars.webp",
      category: "Earrings",
      material: "Silver",
      brand: "Pandora",
      stock: 12,
      isBestSeller: true,
      tags: ["Everyday", "Versatile"],
    },
    {
      id: "luxury-watch",
      name: "Luxury Diamond Watch",
      price: 3499.99,
      originalPrice: 3999.99,
      discount: 13,
      rating: 4.8,
      reviewCount: 89,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743321693/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194_x0qars.webp",
      category: "Watches",
      material: "Diamond",
      brand: "Rolex",
      stock: 2,
      isFeatured: true,
      tags: ["Statement", "Investment"],
      gemstone: "Diamond",
    },
    {
      id: "gold-pendant",
      name: "14K Gold Pendant Necklace",
      price: 299.99,
      originalPrice: 349.99,
      discount: 14,
      rating: 4.4,
      reviewCount: 287,
      image:
        "https://res.cloudinary.com/dd7uhuhan/image/upload/v1743321693/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194_x0qars.webp",
      category: "Necklaces",
      material: "Gold",
      brand: "Kay Jewelers",
      stock: 7,
      tags: ["Delicate", "Everyday"],
    },
  ]);

  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedGemstones, setSelectedGemstones] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  // Get unique values for filters
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const materials = Array.from(new Set(products.map((p) => p.material)));
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const gemstones = Array.from(
    new Set(products.map((p) => p.gemstone).filter(Boolean))
  ) as string[];

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

    // Material filter
    if (
      selectedMaterials.length > 0 &&
      !selectedMaterials.includes(product.material)
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

    // Gemstone filter
    if (
      selectedGemstones.length > 0 &&
      (!product.gemstone || !selectedGemstones.includes(product.gemstone))
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
    <div className="jewellery-page" style={{ padding: "24px" }}>
      {/* Hero Carousel */}
      <Carousel autoplay effect="fade" style={{ marginBottom: "24px" }}>
        {featuredProducts.map((product) => (
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
                color="gold"
                style={{ fontSize: "16px", padding: "4px 12px" }}
              >
                <CrownOutlined /> Luxury Collection
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
          Valentine's Special
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter(
              (p) => p.tags?.includes("Engagement") || p.category === "Rings"
            )
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <JewelleryProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <GiftOutlined style={{ color: "#eb2f96", marginRight: "8px" }} />
          Gift Ideas
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.price < 300)
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <JewelleryProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <GoldOutlined style={{ color: "#faad14", marginRight: "8px" }} />
          Luxury Collection
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter(
              (p) =>
                p.material === "Gold" ||
                p.material === "Platinum" ||
                p.material === "Diamond"
            )
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <JewelleryProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      {/* Main Product Listing */}
      <div style={{ display: "flex", marginBottom: "24px" }}>
        <Title level={2} style={{ flex: 1 }}>
          All Jewellery
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
                max={5000}
                step={50}
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
              <Title level={5}>Materials</Title>
              <Checkbox.Group
                options={materials}
                value={selectedMaterials}
                onChange={(values) => setSelectedMaterials(values as string[])}
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

            {gemstones.length > 0 && (
              <div style={{ marginBottom: "24px" }}>
                <Title level={5}>Gemstones</Title>
                <Checkbox.Group
                  options={gemstones}
                  value={selectedGemstones}
                  onChange={(values) =>
                    setSelectedGemstones(values as string[])
                  }
                  style={{ display: "flex", flexDirection: "column" }}
                />
              </div>
            )}

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

            <Button
              type="default"
              block
              onClick={() => {
                setPriceRange([0, 5000]);
                setSelectedCategories([]);
                setSelectedMaterials([]);
                setSelectedBrands([]);
                setSelectedGemstones([]);
                setSelectedRatings([]);
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
              placeholder="Search jewellery..."
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
                    <JewelleryProductCard product={product} />
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
              <Title level={4}>No jewellery found</Title>
              <Text type="secondary">
                Try adjusting your filters or search query
              </Text>
              <div style={{ marginTop: "16px" }}>
                <Button
                  type="primary"
                  onClick={() => {
                    setPriceRange([0, 5000]);
                    setSelectedCategories([]);
                    setSelectedMaterials([]);
                    setSelectedBrands([]);
                    setSelectedGemstones([]);
                    setSelectedRatings([]);
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

// Jewellery Product Card Component
const JewelleryProductCard: React.FC<{ product: JewelleryProduct }> = ({
  product,
}) => {
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
            style={{
              height: "200px",
              objectFit: "contain",
              padding: "16px",
              backgroundColor: "#fafafa",
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
          <Text type="secondary">{product.brand}</Text>
          {product.isBestSeller && (
            <Tag color="gold" style={{ marginLeft: "8px" }}>
              Best Seller
            </Tag>
          )}
        </div>
        <Title
          level={5}
          style={{ marginBottom: "8px", minHeight: "44px" }}
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
        </div>

        <div style={{ marginBottom: "8px" }}>
          <Tag color="blue">{product.category}</Tag>
          <Tag color="geekblue">{product.material}</Tag>
          {product.gemstone && <Tag color="purple">{product.gemstone}</Tag>}
        </div>

        {product.stock < 5 && (
          <Text type="danger">Only {product.stock} left in stock!</Text>
        )}
      </Card>
    </Badge.Ribbon>
  );
};

export default JewelleryMainPage;
