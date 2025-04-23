"use client";

import FeatureSlider from "@/components/sliders/FeatureSlider";
import { products as proInfo } from "@/constant/constant";
import { IProducts } from "@/types/Common";
import {
  FilterOutlined,
  FireOutlined,
  ShoppingCartOutlined,
  SkinOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Col,
  Drawer,
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

const FashionMainPage: React.FC = () => {
  // Sample fashion data
  const products = proInfo?.filter(
    (pro: IProducts) => pro?.category === "clothes"
  );

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
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);

  // Get unique values for filters
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const types = Array.from(new Set(products.map((p) => p.clotheType)));
  const sizes = Array.from(new Set(products.flatMap((p) => p.clotheSize)));
  const colors = Array.from(new Set(products.flatMap((p) => p.clotheColor)));
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const seasons = Array.from(
    new Set(products.flatMap((p) => p.clotheSeason || []))
  );

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
    if (
      selectedTypes.length > 0 &&
      !selectedTypes.includes(product.clotheType || "")
    ) {
      return false;
    }

    // Size filter
    if (
      selectedSizes.length > 0 &&
      !selectedSizes.some(
        (s) => product.clotheSize && product.clotheSize.includes(s)
      )
    ) {
      return false;
    }

    // Color filter
    if (
      selectedColors.length > 0 &&
      !selectedColors.some(
        (c) => product.clotheColor && product.clotheColor.includes(c)
      )
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
      !selectedSeasons.some((s) => product.clotheSeason?.includes(s))
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

  // Filter content component to avoid duplication
  const FilterContent = () => {
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
    </Card>;
  };

  return (
    <div className="fashion-page box-container" style={{ padding: "24px" }}>
      {/* Hero Carousel */}
      <FeatureSlider featuredProducts={featuredProducts} />

      {/* Highlight Sections */}
      <div style={{ marginBottom: "48px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          <FireOutlined style={{ color: "#ff4d4f", marginRight: "8px" }} />
          Summer Collection
        </Title>
        <Row gutter={[16, 16]}>
          {products
            .filter((p) => p.clotheSeason?.includes("Summer"))
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
          ;
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

      {/* Mobile Filter Drawer */}
      <Drawer
        title="Filters"
        placement="left"
        width={300}
        onClose={() => setMobileFilterVisible(false)}
        open={mobileFilterVisible}
        bodyStyle={{ padding: 0 }}
      >
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
        ;
      </Drawer>

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-filter-button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

// Fashion Product Card Component
const FashionProductCard: React.FC<{ product: IProducts }> = ({ product }) => {
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
          <Link href={`/clothes/details/${product?.id}`}>
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
          </Link>
        }
        actions={[
          <Button
            key={product?.id}
            type="primary"
            icon={<ShoppingCartOutlined />}
            block
          >
            Add to Cart
          </Button>,
        ]}
      >
        <Link href={`/clothes/details/${product?.id}`}>
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
              <Tag>{product.category}</Tag>
              <Tag>{product.clotheType}</Tag>
              {product.clotheColor?.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </Space>
          </div>

          {product.stock < 10 && (
            <Text type="danger">Only {product.stock} left in stock!</Text>
          )}
        </Link>
      </Card>
    </Badge.Ribbon>
  );
};

export default FashionMainPage;
