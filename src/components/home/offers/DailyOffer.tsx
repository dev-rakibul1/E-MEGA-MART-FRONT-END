"use client";

import SectionTItle from "@/components/shared/sectionTitle/SectionTItle";
import { useGetAllDailyOfferQuery } from "@/redux/BaseQuery";

import { ThemeColors } from "@/theme/color";
import { IDailyOffer } from "@/types/Common";
import { Spin, Typography } from "antd";
import "../Home.css";

const { Text } = Typography;

const DailyOffer = () => {
  const { data, isLoading } = useGetAllDailyOfferQuery({
    pollingInterval: 3000,
  });

  const offers: IDailyOffer[] = data?.data;

  return (
    <div className="box-container mt-50">
      {/* Section title */}
      <SectionTItle title="Daily" titleColor="Essentials" btn="View All" />

      {/* content */}
      <div className="offer-grid">
        {isLoading ? (
          <div>
            <Spin size="small" />
          </div>
        ) : (
          offers?.map((offer: IDailyOffer) => (
            <div className="offer-child" key={offer._id}>
              {/* image */}
              <div
                className="offer-image-area"
                style={{
                  border: `1px solid ${ThemeColors.colorBorder}`,
                  background: ThemeColors.colorPrimaryLight,
                }}
              >
                <img src={offer?.imageUrl} alt="offer" />
              </div>

              {/* content */}
              <article
                style={{
                  fontWeight: "500",
                  fontSize: "19px",
                  marginTop: "15px",
                  textAlign: "center",
                }}
              >
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>
                  {offer.category}
                </Text>
                <br />
                <Text style={{ fontWeight: "500", fontSize: "17px" }}>
                  {offer.offer}
                </Text>
              </article>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DailyOffer;
