import { ENUM_USER_ROLE } from "@/lib/role";
import { ThemeColors } from "@/theme/color";
import {
  DownOutlined,
  QuestionCircleOutlined,
  SwapRightOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";

const sidebarItems = (roleInfo: string) => {
  const role = roleInfo ? roleInfo : "visitor";

  // groceries
  const defaultHomePage: MenuProps["items"] = [
    {
      label: <Link href="/">Home</Link>,
      key: `/${role}/`,
    },
  ];
  // groceries
  const groceries: MenuProps["items"] = [
    {
      label: (
        <span>
          Groceries
          <DownOutlined
            style={{
              fontSize: "12px",
              color: ThemeColors.colorPrimary,
              marginLeft: "7px",
            }}
          />
        </span>
      ),
      key: `/${role}/groceries`,
      children: [
        {
          label: <Link href={`/groceries-item-1`}>Groceries item 1</Link>,
          key: `/groceries-item-1`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  // premium Fruits
  const premiumFruits: MenuProps["items"] = [
    {
      label: (
        <span>
          Premium Fruits
          <DownOutlined
            style={{
              fontSize: "12px",
              color: ThemeColors.colorPrimary,
              marginLeft: "7px",
            }}
          />
        </span>
      ),
      key: `/premium-fruits`,
      children: [
        {
          label: (
            <Link href={`/services/front-end-service`}>Front-end Service</Link>
          ),
          key: `/services/front-end-service`,
          icon: <SwapRightOutlined />,
        },
        {
          label: (
            <Link href={`/services/backend-service`}>Backend Service</Link>
          ),
          key: `/services/backend-service`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  //  Home & Kitchen
  const homeAndKitchen: MenuProps["items"] = [
    {
      label: (
        <span>
          Home & Kitchen
          <DownOutlined
            style={{
              fontSize: "12px",
              color: ThemeColors.colorPrimary,
              marginLeft: "7px",
            }}
          />
        </span>
      ),
      key: `/${role}/home-and-kitchen`,
      children: [
        {
          label: "Home kitchen 01",
          key: `/${role}/kitchen1`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  // Fashion
  const fashion: MenuProps["items"] = [
    {
      label: (
        <span>
          Fashion
          <DownOutlined
            style={{
              fontSize: "12px",
              color: ThemeColors.colorPrimary,
              marginLeft: "7px",
            }}
          />
        </span>
      ),
      key: `/${role}/fashion`,

      children: [
        {
          label: "Fashion 01",
          key: `/${role}/Fashion 01`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Fashion 02",
          key: `/${role}/Fashion 02`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Fashion 03",
          key: `/${role}/Fashion 03`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Fashion 04",
          key: `/${role}/Fashion 04`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  // Electronics
  const electronics: MenuProps["items"] = [
    {
      label: (
        <span>
          Electronics
          <DownOutlined
            style={{
              fontSize: "12px",
              color: ThemeColors.colorPrimary,
              marginLeft: "7px",
            }}
          />
        </span>
      ),
      key: `/${role}/electronics`,

      children: [
        {
          label: "Electronics 01",
          key: `/${role}/electronics 01`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  // Beauty
  const beauty: MenuProps["items"] = [
    {
      label: (
        <span>
          Beauty
          <DownOutlined
            style={{
              fontSize: "12px",
              color: ThemeColors.colorPrimary,
              marginLeft: "7px",
            }}
          />
        </span>
      ),
      key: `/${role}/beauty`,
      children: [
        {
          label: "Beauty 01",
          key: `/${role}/Beauty 01`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Beauty 02",
          key: `/${role}/Beauty 02`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Beauty 03",
          key: `/${role}/Beauty 03`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Beauty 04",
          key: `/${role}/Beauty 04`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Beauty 05",
          key: `/${role}/Beauty 05`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Beauty 06",
          key: `/${role}/Beauty 06`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Beauty 07",
          key: `/${role}/Beauty 07`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  // Home Improvement
  const homeImprovement: MenuProps["items"] = [
    {
      label: (
        <span>
          Home Improvement
          <DownOutlined
            style={{
              fontSize: "12px",
              color: ThemeColors.colorPrimary,
              marginLeft: "7px",
            }}
          />
        </span>
      ),
      key: `/${role}/home-improvement`,
      children: [
        {
          label: "Home Improvement 01",
          key: `/${role}/home-improvement 01`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Home Improvement 02",
          key: `/${role}/home-improvement 02`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Home Improvement 03",
          key: `/${role}/home-improvement 03`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Home Improvement 04",
          key: `/${role}/home-improvement 04`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Home Improvement 05",
          key: `/${role}/home-improvement 05`,
          icon: <SwapRightOutlined />,
        },
        {
          label: "Home Improvement 06",
          key: `/${role}/home-improvement 06`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  // Sports, Toys & Luggage
  const sportsToysLuggage: MenuProps["items"] = [
    {
      label: (
        <span>
          Sports, Toys & Luggage
          <DownOutlined
            style={{
              fontSize: "12px",
              color: ThemeColors.colorPrimary,
              marginLeft: "7px",
            }}
          />
        </span>
      ),
      key: `/${role}/sports-toys-luggage`,

      children: [
        {
          label: "Sports toys luggage 01",
          key: `/${role}/sports-toys-luggage 01`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  // dashboard
  const dashboard: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
      key: `/${role}/dashboard`,
      icon: <QuestionCircleOutlined />,
      children: [
        {
          label: <Link href={`/${role}/dashboard/profile`}>Profile</Link>,
          key: `/${role}/dashboard/profile`,
          icon: <SwapRightOutlined />,
        },
        {
          label: <Link href={`/${role}/dashboard/management`}>Management</Link>,
          key: `/${role}/dashboard/management`,
          icon: <SwapRightOutlined />,
        },

        {
          label: <Link href={`/${role}/dashboard/settings`}>Settings</Link>,
          key: `/${role}/dashboard/settings`,
          icon: <SwapRightOutlined />,
        },
        {
          label: <Link href={`/${role}/dashboard/logout`}>Log out</Link>,
          key: `/${role}/dashboard/logout`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  const superAdmin = [
    ...defaultHomePage,
    ...groceries,
    ...premiumFruits,
    ...homeAndKitchen,
    ...fashion,
    ...electronics,
    ...beauty,
    ...homeImprovement,
    ...sportsToysLuggage,
    ...dashboard,
  ];
  const admin = [
    ...defaultHomePage,
    ...groceries,
    ...premiumFruits,
    ...homeAndKitchen,
    ...fashion,
    ...electronics,
    ...beauty,
    ...homeImprovement,
    ...sportsToysLuggage,
    ...dashboard,
  ];
  const moderator = [
    ...defaultHomePage,
    ...groceries,
    ...premiumFruits,
    ...homeAndKitchen,
    ...fashion,
    ...electronics,
    ...beauty,
    ...homeImprovement,
    ...sportsToysLuggage,
    ...dashboard,
  ];
  const visitor = [
    ...defaultHomePage,
    ...groceries,
    ...premiumFruits,
    ...homeAndKitchen,
    ...fashion,
    ...electronics,
    ...beauty,
    ...homeImprovement,
    ...sportsToysLuggage,
  ];

  if (role === ENUM_USER_ROLE.SUPER_ADMIN) {
    return superAdmin;
  } else if (role === ENUM_USER_ROLE.ADMIN) {
    return admin;
  } else if (role === ENUM_USER_ROLE.MODERATOR) {
    return moderator;
  } else {
    return visitor;
  }
};

export default sidebarItems;
