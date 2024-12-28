"use client";

import {
  TriggerMenuFilterIcon,
  TriggerMenuSearchIcon,
  TriggerMenuSearchInput,
} from "@/styles/GStyles";
import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";

const TriggerMenuSearch = () => {
  return (
    <>
      <div style={{ width: "100%", maxWidth: "100%", position: "relative" }}>
        <input
          style={TriggerMenuSearchInput}
          type="search"
          placeholder="Search essentials, groceries and more..."
        />

        {/* Search icons */}
        <span style={TriggerMenuSearchIcon}>
          <SearchOutlined />
        </span>

        {/* dropdown */}
        <span style={TriggerMenuFilterIcon}>
          <UnorderedListOutlined />
        </span>
      </div>
    </>
  );
};

export default TriggerMenuSearch;
