"use client";

import {
  ClockCircleOutlined,
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
  Carousel,
  Checkbox,
  Col,
  Collapse,
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

interface SmartWatchProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  brand: "Apple" | "Samsung" | "Fitbit" | "Garmin" | "Huawei" | "Amazfit";
  os:
    | "watchOS"
    | "Wear OS"
    | "Fitbit OS"
    | "Garmin OS"
    | "HarmonyOS"
    | "Proprietary";
  features: string[];
  displayType: "AMOLED" | "Retina" | "LCD" | "Memory LCD";
  batteryLife: number; // in days
  waterResistance: boolean;
  cellular: boolean;
  healthFeatures: string[];
  colorOptions: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

const SmartWatchMainPage: React.FC = () => {
  // Sample smart watch data
  const [products, setProducts] = useState<SmartWatchProduct[]>([
    {
      id: "apple-watch-s8",
      name: "Apple Watch Series 8",
      price: 399.99,
      originalPrice: 429.99,
      discount: 7,
      rating: 4.8,
      reviewCount: 1245,
      image: "/apple-watch-s8.jpg",
      brand: "Apple",
      os: "watchOS",
      features: ["ECG", "Blood Oxygen", "Fall Detection", "Always-On Display"],
      displayType: "Retina",
      batteryLife: 1.5,
      waterResistance: true,
      cellular: true,
      healthFeatures: ["Heart Rate", "Sleep Tracking", "Activity Tracking"],
      colorOptions: ["Midnight", "Starlight", "Product Red"],
      isFeatured: true,
      isBestSeller: true,
    },
    {
      id: "galaxy-watch5",
      name: "Samsung Galaxy Watch 5",
      price: 279.99,
      originalPrice: 299.99,
      discount: 7,
      rating: 4.6,
      reviewCount: 876,
      image: "/galaxy-watch5.jpg",
      brand: "Samsung",
      os: "Wear OS",
      features: [
        "Bioelectrical Impedance",
        "Sleep Coaching",
        "Advanced Workout Tracking",
      ],
      displayType: "AMOLED",
      batteryLife: 2,
      waterResistance: true,
      cellular: false,
      healthFeatures: ["Heart Rate", "Blood Pressure", "Body Composition"],
      colorOptions: ["Graphite", "Silver", "Pink Gold"],
      isNew: true,
    },
    {
      id: "fitbit-sense2",
      name: "Fitbit Sense 2",
      price: 299.95,
      originalPrice: 329.95,
      discount: 9,
      rating: 4.5,
      reviewCount: 543,
      image: "/fitbit-sense2.jpg",
      brand: "Fitbit",
      os: "Fitbit OS",
      features: ["Stress Management", "Skin Temperature", "EDA Scan"],
      displayType: "AMOLED",
      batteryLife: 6,
      waterResistance: true,
      cellular: false,
      healthFeatures: ["Heart Rate", "SpO2", "Sleep Score"],
      colorOptions: ["Shadow Grey", "Lunar White"],
      isBestSeller: true,
    },
    {
      id: "garmin-venu2",
      name: "Garmin Venu 2",
      price: 349.99,
      originalPrice: 399.99,
      discount: 13,
      rating: 4.7,
      reviewCount: 765,
      image: "/garmin-venu2.jpg",
      brand: "Garmin",
      os: "Garmin OS",
      features: ["Pulse Ox", "Body Battery", "Advanced Sleep Monitoring"],
      displayType: "AMOLED",
      batteryLife: 11,
      waterResistance: true,
      cellular: false,
      healthFeatures: ["Heart Rate", "Respiration", "Hydration Tracking"],
      colorOptions: ["Slate", "Silver"],
      isFeatured: true,
    },
    {
      id: "huawei-watch-gt3",
      name: "Huawei Watch GT 3",
      price: 199.99,
      originalPrice: 229.99,
      discount: 13,
      rating: 4.4,
      reviewCount: 432,
      image: "/huawei-watch-gt3.jpg",
      brand: "Huawei",
      os: "HarmonyOS",
      features: ["TruSeen 5.0+", "TruSleep 2.0", "Workout Modes"],
      displayType: "AMOLED",
      batteryLife: 14,
      waterResistance: true,
      cellular: false,
      healthFeatures: ["Heart Rate", "SpO2", "Stress Monitoring"],
      colorOptions: ["Black", "Brown", "Silver"],
      isNew: true,
    },
    {
      id: "amazfit-gtr4",
      name: "Amazfit GTR 4",
      price: 199.99,
      originalPrice: 229.99,
      discount: 13,
      rating: 4.3,
      reviewCount: 321,
      image: "/amazfit-gtr4.jpg",
      brand: "Amazfit",
      os: "Proprietary",
      features: ["150+ Sports Modes", "Bluetooth Calls", "Zepp OS 2.0"],
      displayType: "AMOLED",
      batteryLife: 14,
      waterResistance: true,
      cellular: false,
      healthFeatures: ["Heart Rate", "Blood Oxygen", "Sleep Monitoring"],
      colorOptions: ["Infinite Black", "Racetrack Grey"],
    },
  ]);

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
    if (selectedOS.length > 0 && !selectedOS.includes(product.os)) {
      return false;
    }

    // Features filter
    if (
      selectedFeatures.length > 0 &&
      !selectedFeatures.some((f) => product.features.includes(f))
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
    <div className="smartwatch-page" style={{ padding: "24px" }}>
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
                color="blue"
                style={{ fontSize: "16px", padding: "4px 12px" }}
              >
                <ClockCircleOutlined /> {product.brand}'s Latest
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
const SmartWatchProductCard: React.FC<{ product: SmartWatchProduct }> = ({
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
            <Tag>{product.os}</Tag>
            <Tag>{product.batteryLife} day battery</Tag>
            {product.waterResistance && <Tag color="blue">Waterproof</Tag>}
            {product.cellular && <Tag color="green">Cellular</Tag>}
          </Space>
        </div>

        <div style={{ marginTop: "8px" }}>
          <Collapse ghost size="small">
            <Collapse.Panel header="Key Features" key="1">
              <ul style={{ paddingLeft: "16px", margin: 0 }}>
                {product.features.slice(0, 3).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Collapse.Panel>
          </Collapse>
        </div>
      </Card>
    </Badge.Ribbon>
  );
};

export default SmartWatchMainPage;
