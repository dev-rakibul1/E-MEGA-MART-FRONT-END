"use client";

import FeatureSlider from "@/components/sliders/FeatureSlider";
import { products as proInfo } from "@/constant/constant";
import { IProducts } from "@/types/Common";
import {
  FilterOutlined,
  FireOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
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
import Link from "next/link";
import React, { useState } from "react";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const SmartWatchMainPage: React.FC = () => {
  // Sample smart watch data

  const products = proInfo?.filter(
    (pro: IProducts) => pro?.category === "watch"
  );

  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 500]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedOS, setSelectedOS] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedHealthFeatures, setSelectedHealthFeatures] = useState<
    string[]
  >([]);
  const [waterResistant, setWaterResistant] = useState<boolean>(false);
  const [cellular, setCellular] = useState<boolean>(false);
  const [batteryLife, setBatteryLife] = useState<[number, number]>([1, 14]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  // Get unique values for filters
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const osOptions = Array.from(new Set(products.map((p) => p.os)));
  const allFeatures = Array.from(new Set(products.flatMap((p) => p.features)));
  const allHealthFeatures = Array.from(
    new Set(products.flatMap((p) => p.healthFeatures))
  );

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // OS filter
    if (selectedOS.length > 0 && !selectedOS.includes(product?.os)) {
      return false;
    }

    // Features filter
    if (
      selectedFeatures.length > 0 &&
      !selectedFeatures.some((f) => product?.features.includes(f))
    ) {
      return false;
    }

    // Health features filter
    if (
      selectedHealthFeatures.length > 0 &&
      !selectedHealthFeatures.some((hf) => product.healthFeatures.includes(hf))
    ) {
      return false;
    }

    // Water resistance filter
    if (waterResistant && !product.waterResistance) {
      return false;
    }

    // Cellular filter
    if (cellular && !product.cellular) {
      return false;
    }

    // Battery life filter
    if (
      product.batteryLife < batteryLife[0] ||
      product.batteryLife > batteryLife[1]
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
      case "battery":
        return b.batteryLife - a.batteryLife;
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
    <div className="smartwatch-page box-container" style={{ padding: "24px" }}>
      {/* Hero Carousel */}
      <FeatureSlider featuredProducts={featuredProducts} />

      {/* Highlight Sections */}
      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <FireOutlined style={{ color: "#ff4d4f", marginRight: "8px" }} />
          Best Sellers
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.isBestSeller)
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <SmartWatchProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <HeartFilled style={{ color: "#eb2f96", marginRight: "8px" }} />
          Health & Fitness Focused
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter(
              (p) =>
                p.healthFeatures.includes("ECG") ||
                p.healthFeatures.includes("Blood Pressure")
            )
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <SmartWatchProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <WifiOutlined style={{ color: "#1890ff", marginRight: "8px" }} />
          Cellular Models
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.cellular)
            .slice(0, 4)
            .map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <SmartWatchProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>

      {/* Main Product Listing */}
      <div style={{ display: "flex", marginBottom: "24px" }}>
        <Title level={2} style={{ flex: 1 }}>
          All Smart Watches
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
            <Option value="battery">Longest Battery</Option>
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
                min={100}
                max={500}
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
              <Title level={5}>Brand</Title>
              <Checkbox.Group
                options={brands}
                value={selectedBrands}
                onChange={(values) => setSelectedBrands(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Operating System</Title>
              <Checkbox.Group
                options={osOptions}
                value={selectedOS}
                onChange={(values) => setSelectedOS(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Battery Life (days)</Title>
              <Slider
                range
                min={1}
                max={14}
                step={0.5}
                defaultValue={batteryLife}
                value={batteryLife}
                onChange={setBatteryLife}
                tipFormatter={(value) => `${value} days`}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Text>{batteryLife[0]} days</Text>
                <Text>{batteryLife[1]} days</Text>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Features</Title>
              <Checkbox.Group
                options={allFeatures}
                value={selectedFeatures}
                onChange={(values) => setSelectedFeatures(values as string[])}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Title level={5}>Health Features</Title>
              <Checkbox.Group
                options={allHealthFeatures}
                value={selectedHealthFeatures}
                onChange={(values) =>
                  setSelectedHealthFeatures(values as string[])
                }
                style={{ display: "flex", flexDirection: "column" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Checkbox
                checked={waterResistant}
                onChange={(e) => setWaterResistant(e.target.checked)}
              >
                Water Resistant
              </Checkbox>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Checkbox
                checked={cellular}
                onChange={(e) => setCellular(e.target.checked)}
              >
                Cellular Connectivity
              </Checkbox>
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
                setPriceRange([100, 500]);
                setSelectedBrands([]);
                setSelectedOS([]);
                setSelectedFeatures([]);
                setSelectedHealthFeatures([]);
                setWaterResistant(false);
                setCellular(false);
                setBatteryLife([1, 14]);
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
              placeholder="Search smart watches..."
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
                    <SmartWatchProductCard product={product} />
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
              <Title level={4}>No smart watches found</Title>
              <Text type="secondary">
                Try adjusting your filters or search query
              </Text>
              <div style={{ marginTop: "16px" }}>
                <Button
                  type="primary"
                  onClick={() => {
                    setPriceRange([100, 500]);
                    setSelectedBrands([]);
                    setSelectedOS([]);
                    setSelectedFeatures([]);
                    setSelectedHealthFeatures([]);
                    setWaterResistant(false);
                    setCellular(false);
                    setBatteryLife([1, 14]);
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

// Smart Watch Product Card Component
const SmartWatchProductCard: React.FC<{ product: IProducts }> = ({
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
          <Link href={`/watch/details/${product?.id}`}>
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
          </Link>
        }
        actions={[
          // eslint-disable-next-line react/jsx-key
          <Button type="primary" icon={<ShoppingCartOutlined />} block>
            Add to Cart
          </Button>,
        ]}
      >
        <Link href={`/watch/details/${product?.id}`}>
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
              ({product.reviewsCount})
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
              <Tag>{product.os}</Tag>
              <Tag>{product.batteryLife} day battery</Tag>
              {product.waterResistance && <Tag color="blue">Waterproof</Tag>}
              {product.cellular && <Tag color="green">Cellular</Tag>}
            </Space>
          </div>
        </Link>
      </Card>
    </Badge.Ribbon>
  );
};

export default SmartWatchMainPage;
