/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import FeatureSlider from "@/components/sliders/FeatureSlider";
import { products } from "@/constant/constant";
import {
  FilterOutlined,
  FireOutlined,
  StarFilled,
  ThunderboltOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Drawer,
  Input,
  Pagination,
  Row,
  Select,
  Slider,
  Space,
  Typography,
} from "antd";
import React, { useState } from "react";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const ProductMainPage: React.FC = () => {
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
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);

  // Get unique categories, brands, and tags
  const categories = Array.from(new Set(products?.map((p) => p.category)));
  const brands = Array.from(new Set(products?.map((p) => p.brand)));
  const tags = Array.from(new Set(products?.flatMap((p) => p.tags || [])));

  // Filter products based on selected filters
  const filteredProducts = products?.filter((product) => {
    // Price filter
    if (product?.price < priceRange[0] || product?.price > priceRange[1]) {
      return false;
    }

    // Category filter
    if (
      selectedCategories?.length > 0 &&
      !selectedCategories?.includes(product?.category)
    ) {
      return false;
    }

    // Brand filter
    if (
      selectedBrands?.length > 0 &&
      !selectedBrands?.includes(product?.brand)
    ) {
      return false;
    }

    // Rating filter
    if (
      selectedRatings?.length > 0 &&
      !selectedRatings?.some((r) => product.rating >= r)
    ) {
      return false;
    }

    // Tag filter
    if (
      selectedTags?.length > 0 &&
      !selectedTags?.some((t) => product?.tags?.includes(t))
    ) {
      return false;
    }

    // Search filter
    if (
      searchQuery &&
      !product?.name.toLowerCase().includes(searchQuery?.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  console.log(products);

  // Sort products
  const sortedProducts = [...filteredProducts]?.sort((a, b) => {
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
  const paginatedProducts = sortedProducts?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Featured products for carousel
  const featuredProducts = products?.filter((p) => p.isFeatured);

  // Filter content component to avoid duplication
  const FilterContent = () => (
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
          // @ts-expect-error
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

      {tags?.length > 0 && (
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
  );

  // const [createAddToCart]=useCreateAddToCartMutation()

  return (
    <>
      <div className="box-container">
        <div className="product-main-page">
          {/* Hero Carousel */}
          <FeatureSlider featuredProducts={featuredProducts} />

          {/* Highlight Sections */}
          <div style={{ marginBottom: "48px" }}>
            <Title level={3} style={{ marginBottom: "16px" }}>
              <FireOutlined style={{ color: "#ff4d4f", marginRight: "8px" }} />
              Hot Deals
            </Title>
            <Row gutter={[16, 16]}>
              {products
                ?.filter((p) => p.discount && p.discount > 10)
                ?.slice(0, 4)
                ?.map((product) => (
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
                ?.filter((p) => p.isNew)
                ?.slice(0, 4)
                ?.map((product) => (
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
                ?.filter((p) => p.isBestSeller)
                ?.slice(0, 4)
                ?.map((product) => (
                  <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                    <ProductCard product={product} />
                  </Col>
                ))}
            </Row>
          </div>

          {/* Main Product Listing */}
          <div style={{ marginBottom: "24px" }}>
            <Row
              gutter={[30, 30]}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <Title level={2} style={{ flex: 1 }}>
                  All Products
                </Title>
              </Col>
              <Col
                xs={24}
                sm={12}
                md={16}
                lg={16}
                xl={16}
                xxl={16}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Space>
                  {/* Mobile filter button - only visible on small screens */}
                  <Button
                    icon={<FilterOutlined />}
                    onClick={() => setMobileFilterVisible(true)}
                    style={{ display: "block", marginRight: "8px" }}
                    className="mobile-filter-button"
                  >
                    Filters
                  </Button>
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
                </Space>
              </Col>
            </Row>
          </div>

          <Row gutter={[24, 24]}>
            {/* Filters Sidebar - hidden on mobile */}
            <Col xs={0} md={6}>
              <FilterContent />
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
                    {paginatedProducts?.map((product) => (
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

          {/* Mobile Filter Drawer */}
          <Drawer
            title="Filters"
            placement="left"
            width={300}
            onClose={() => setMobileFilterVisible(false)}
            open={mobileFilterVisible}
            bodyStyle={{ padding: 0 }}
          >
            <FilterContent />
          </Drawer>
        </div>

        {/* Add some CSS to hide mobile filter button on desktop */}
        <style jsx>{`
          @media (min-width: 768px) {
            .mobile-filter-button {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ProductMainPage;
