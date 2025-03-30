"use client";

import {
  FilterOutlined,
  FireOutlined,
  ManOutlined,
  ShoppingCartOutlined,
  SkinOutlined,
  ThunderboltOutlined,
  WomanOutlined,
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

interface FashionProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: "Men" | "Women" | "Kids" | "Accessories";
  type: "T-Shirts" | "Shirts" | "Jeans" | "Dresses" | "Shoes" | "Activewear";
  size: string[];
  color: string[];
  brand: string;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  season?: string[];
}

const FashionMainPage: React.FC = () => {
  // Sample fashion data
  const [products, setProducts] = useState<FashionProduct[]>([
    {
      id: "denim-jacket",
      name: "Classic Denim Jacket",
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      rating: 4.7,
      reviewCount: 342,
      image: "/denim-jacket.jpg",
      category: "Men",
      type: "Jeans",
      size: ["S", "M", "L", "XL"],
      color: ["Blue", "Black"],
      brand: "Levi's",
      stock: 15,
      isFeatured: true,
      isBestSeller: true,
      season: ["Spring", "Fall"],
    },
    {
      id: "summer-dress",
      name: "Floral Summer Dress",
      price: 39.99,
      originalPrice: 49.99,
      discount: 20,
      rating: 4.8,
      reviewCount: 215,
      image: "/summer-dress.jpg",
      category: "Women",
      type: "Dresses",
      size: ["XS", "S", "M"],
      color: ["Pink", "White", "Yellow"],
      brand: "Zara",
      stock: 8,
      isNew: true,
      season: ["Summer"],
    },
    {
      id: "sneakers",
      name: "Running Sneakers",
      price: 89.99,
      originalPrice: 99.99,
      discount: 10,
      rating: 4.6,
      reviewCount: 178,
      image: "/sneakers.jpg",
      category: "Men",
      type: "Shoes",
      size: ["8", "9", "10", "11"],
      color: ["White", "Black", "Blue"],
      brand: "Nike",
      stock: 5,
      season: ["All Season"],
    },
    {
      id: "formal-shirt",
      name: "Slim Fit Formal Shirt",
      price: 29.99,
      originalPrice: 39.99,
      discount: 26,
      rating: 4.5,
      reviewCount: 432,
      image: "/formal-shirt.jpg",
      category: "Men",
      type: "Shirts",
      size: ["S", "M", "L"],
      color: ["White", "Blue", "Gray"],
      brand: "H&M",
      stock: 12,
      isBestSeller: true,
      season: ["All Season"],
    },
    {
      id: "yoga-pants",
      name: "High-Waist Yoga Pants",
      price: 34.99,
      originalPrice: 44.99,
      discount: 22,
      rating: 4.8,
      reviewCount: 89,
      image: "/yoga-pants.jpg",
      category: "Women",
      type: "Activewear",
      size: ["XS", "S", "M", "L"],
      color: ["Black", "Gray", "Blue"],
      brand: "Lululemon",
      stock: 20,
      isFeatured: true,
      season: ["All Season"],
    },
    {
      id: "graphic-tee",
      name: "Vintage Graphic T-Shirt",
      price: 19.99,
      originalPrice: 24.99,
      discount: 20,
      rating: 4.4,
      reviewCount: 287,
      image: "/graphic-tee.jpg",
      category: "Men",
      type: "T-Shirts",
      size: ["S", "M", "L", "XL"],
      color: ["Black", "White", "Red"],
      brand: "Urban Outfitters",
      stock: 7,
      season: ["Summer"],
    },
  ]);

  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  // Get unique values for filters
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const types = Array.from(new Set(products.map((p) => p.type)));
  const sizes = Array.from(new Set(products.flatMap((p) => p.size)));
  const colors = Array.from(new Set(products.flatMap((p) => p.color)));
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const seasons = Array.from(new Set(products.flatMap((p) => p.season || [])));

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

    // Type filter
    if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
      return false;
    }

    // Size filter
    if (
      selectedSizes.length > 0 &&
      !selectedSizes.some((s) => product.size.includes(s))
    ) {
      return false;
    }

    // Color filter
    if (
      selectedColors.length > 0 &&
      !selectedColors.some((c) => product.color.includes(c))
    ) {
      return false;
    }

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Season filter
    if (
      selectedSeasons.length > 0 &&
      !selectedSeasons.some((s) => product.season?.includes(s))
    ) {
      return false;
    }

    // Rating filter
    if (
      selectedRatings.length > 0 &&
      !selectedRatings.some((r) => product.rating >= r)
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
    <div className="fashion-page" style={{ padding: "24px" }}>
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
                color="magenta"
                style={{ fontSize: "16px", padding: "4px 12px" }}
              >
                {product.category === "Women" ? (
                  <WomanOutlined />
                ) : (
                  <ManOutlined />
                )}{" "}
                {product.category}'s Collection
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
          Summer Collection
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.season?.includes("Summer"))
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <FashionProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <SkinOutlined style={{ color: "#eb2f96", marginRight: "8px" }} />
          New Arrivals
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.isNew)
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <FashionProductCard product={product} />
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
                <FashionProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      {/* Main Product Listing */}
      <div style={{ display: "flex", marginBottom: "24px" }}>
        <Title level={2} style={{ flex: 1 }}>
          All Clothing
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
                max={200}
                step={5}
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
              <Title level={5}>Category</Title>
              <Checkbox.Group
                options={categories}
                value={selectedCategories}
                onChange={(values) => setSelectedCategories(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Type</Title>
              <Checkbox.Group
                options={types}
                value={selectedTypes}
                onChange={(values) => setSelectedTypes(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Size</Title>
              <Checkbox.Group
                options={sizes}
                value={selectedSizes}
                onChange={(values) => setSelectedSizes(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Color</Title>
              <Checkbox.Group
                options={colors}
                value={selectedColors}
                onChange={(values) => setSelectedColors(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Brand</Title>
              <Checkbox.Group
                options={brands}
                value={selectedBrands}
                onChange={(values) => setSelectedBrands(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Season</Title>
              <Checkbox.Group
                options={seasons}
                value={selectedSeasons}
                onChange={(values) => setSelectedSeasons(values as string[])}
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

            <Button
              type="default"
              block
              onClick={() => {
                setPriceRange([0, 200]);
                setSelectedCategories([]);
                setSelectedTypes([]);
                setSelectedSizes([]);
                setSelectedColors([]);
                setSelectedBrands([]);
                setSelectedSeasons([]);
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
              placeholder="Search clothing..."
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
                    <FashionProductCard product={product} />
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
              <Title level={4}>No clothing items found</Title>
              <Text type="secondary">
                Try adjusting your filters or search query
              </Text>
              <div style={{ marginTop: "16px" }}>
                <Button
                  type="primary"
                  onClick={() => {
                    setPriceRange([0, 200]);
                    setSelectedCategories([]);
                    setSelectedTypes([]);
                    setSelectedSizes([]);
                    setSelectedColors([]);
                    setSelectedBrands([]);
                    setSelectedSeasons([]);
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

// Fashion Product Card Component
const FashionProductCard: React.FC<{ product: FashionProduct }> = ({
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
              height: "250px",
              objectFit: "cover",
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
          <Space size={[4, 4]} wrap>
            <Tag>{product.category}</Tag>
            <Tag>{product.type}</Tag>
            {product.color.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
          </Space>
        </div>

        {product.stock < 10 && (
          <Text type="danger">Only {product.stock} left in stock!</Text>
        )}
      </Card>
    </Badge.Ribbon>
  );
};

export default FashionMainPage;
