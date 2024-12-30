"use client";

import { ThemeColors } from "@/theme/color";
import { footer01, footer02 } from "@/types/Common";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Col, List, Row, Typography } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <div
      className="mt-50"
      style={{
        background: ThemeColors.colorPrimary,
        color: ThemeColors.bgWhite,
        padding: "20px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="box-container"
        style={{ position: "relative", zIndex: "5" }}
      >
        {/* Columns */}
        <Row gutter={[20, 20]}>
          {/* Column 01 */}
          <Col xs={24} sm={12} lg={8}>
            <Title level={2} style={{ color: ThemeColors.bgWhite }}>
              MegaMart
            </Title>
            <article>
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: ThemeColors.bgWhite,
                }}
              >
                Contact Us
              </Text>

              {/* WhatsApp */}
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  marginTop: "10px",
                }}
              >
                <WhatsAppOutlined
                  style={{ fontSize: "20px", color: ThemeColors.bgWhite }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "15px",
                    marginTop: "-3px",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: ThemeColors.bgWhite,
                    }}
                  >
                    {` What's App`}
                  </Text>
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: ThemeColors.bgWhite,
                    }}
                  >
                    +1 202-918-2132
                  </Text>
                </div>
              </div>

              {/* Call us */}
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  marginTop: "25px",
                }}
              >
                <PhoneOutlined
                  style={{ fontSize: "20px", color: ThemeColors.bgWhite }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "15px",
                    marginTop: "-3px",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: ThemeColors.bgWhite,
                    }}
                  >
                    Call Us
                  </Text>
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: ThemeColors.bgWhite,
                    }}
                  >
                    +1 202-918-2132
                  </Text>
                </div>
              </div>

              {/* Download App */}
              <div style={{ marginTop: "25px" }}>
                <Text
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: ThemeColors.bgWhite,
                  }}
                >
                  Download app
                </Text>

                <div
                  style={{ marginTop: "15px", display: "flex", gap: "10px" }}
                >
                  <Image
                    src="https://res.cloudinary.com/dd7uhuhan/image/upload/v1735457676/astore_h00if2.png"
                    alt="store"
                    width={300}
                    height={150}
                    style={{ maxWidth: "120px", cursor: "pointer" }}
                    priority
                  />
                  <Image
                    src="https://res.cloudinary.com/dd7uhuhan/image/upload/v1735457676/gplay_n4ccvl.png"
                    alt="store"
                    width={300}
                    height={150}
                    style={{ maxWidth: "120px", cursor: "pointer" }}
                    priority
                  />
                </div>
              </div>
            </article>
          </Col>

          {/* Column 02 */}
          <Col xs={24} sm={12} lg={8}>
            <Text
              style={{
                fontSize: "19px",
                fontWeight: "400",
                color: ThemeColors.bgWhite,
                borderBottom: `2px solid ${ThemeColors.bgWhite}`,
                paddingBottom: "10px",
              }}
            >
              Most Popular Categories
            </Text>

            <div style={{ color: ThemeColors.bgWhite, marginTop: "25px" }}>
              <List
                dataSource={footer01}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      color: ThemeColors.bgWhite,
                      border: "none",
                      listStyleType: "unset",
                      marginTop: "-10px",
                      fontWeight: "400",
                    }}
                  >
                    {item}
                  </List.Item>
                )}
              />
            </div>
          </Col>

          {/* Column 03 */}
          <Col xs={24} sm={12} lg={8}>
            <Text
              style={{
                fontSize: "19px",
                fontWeight: "400",
                color: ThemeColors.bgWhite,
                borderBottom: `2px solid ${ThemeColors.bgWhite}`,
                paddingBottom: "10px",
              }}
            >
              Customer Service
            </Text>

            <div style={{ color: ThemeColors.bgWhite, marginTop: "25px" }}>
              <List
                dataSource={footer02}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      color: ThemeColors.bgWhite,
                      border: "none",
                      listStyleType: "unset",
                      marginTop: "-10px",
                      fontWeight: "400",
                    }}
                  >
                    {item}
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col span={24}>
            <div
              style={{
                borderTop: `1px solid ${ThemeColors.bgWhite}`,
                marginTop: "20px",
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <Text style={{ color: ThemeColors.bgWhite }}>
                &copy; {new Date().getFullYear()} All rights reserved. Reliance
                Retail Ltd.
              </Text>
            </div>
          </Col>
        </Row>
      </div>

      {/* shape */}
      <div
        className="footer-shape"
        style={{ position: "absolute", top: "-20%", right: "-15%" }}
      >
        <div
          style={{
            width: "400px",
            height: "400px",
            border: "1px solid #0c9bda",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "360px",
              height: "360px",
              display: "inline-block",
              border: "1px solid #0c9bda",
              background: "#0c9bda",
              borderRadius: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
