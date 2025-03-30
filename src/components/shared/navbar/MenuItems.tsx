import { ENUM_USER_ROLE } from "@/lib/role";
import {
  ClockCircleOutlined,
  CrownOutlined,
  GiftOutlined,
  HomeOutlined,
  MobileOutlined,
  QuestionCircleOutlined,
  ShoppingOutlined,
  SkinOutlined,
  SwapRightOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
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
      icon: <HomeOutlined />,
    },
  ];
  // Mobiles
  const groceries: MenuProps["items"] = [
    {
      label: <Link href={`/mobiles`}>Mobile</Link>,
      key: `/mobiles`,
      icon: <MobileOutlined />,
    },
  ];

  // Jewellery
  const jewellery: MenuProps["items"] = [
    {
      label: <Link href={`/jewellery`}>Jewellery</Link>,
      key: `/jewellery`,
      icon: <CrownOutlined />,
    },
  ];

  // clothes
  const clothes: MenuProps["items"] = [
    {
      label: <Link href={`/clothes`}>Clothes</Link>,
      key: `/clothes`,
      icon: <SkinOutlined />,
    },
  ];

  // watch
  const watch: MenuProps["items"] = [
    {
      label: <Link href={`/watch`}>Watch</Link>,
      key: `/watch`,
      icon: <ClockCircleOutlined />,
    },
  ];

  // shop
  const shop: MenuProps["items"] = [
    {
      label: <Link href={`/shoping`}>Shoping</Link>,
      key: `/shoping`,
      icon: <ShoppingOutlined />,
    },
  ];

  // Fashion
  const fashion: MenuProps["items"] = [
    {
      label: "Fashion",
      key: `/${role}/fashion`,
      icon: <GiftOutlined />,

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
      label: "Electronics",
      key: `/${role}/electronics`,
      icon: <ThunderboltOutlined />,

      children: [
        {
          label: "Electronics 01",
          key: `/${role}/electronics 01`,
          icon: <SwapRightOutlined />,
        },
      ],
    },
  ];

  // Sports, Toys & Luggage
  const sportsToysLuggage: MenuProps["items"] = [
    {
      label: "Sports & Toys",
      key: `/${role}/sports-toys-luggage`,
      icon: <TrophyOutlined />,

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
    ...shop,
    ...groceries,
    ...jewellery,
    ...clothes,
    ...watch,
    ...fashion,
    ...electronics,
    ...sportsToysLuggage,
    ...dashboard,
  ];
  const admin = [
    ...defaultHomePage,
    ...shop,
    ...groceries,
    ...clothes,
    ...watch,
    ...jewellery,
    ...fashion,
    ...electronics,
    ...sportsToysLuggage,
    ...dashboard,
  ];
  const moderator = [
    ...defaultHomePage,
    ...shop,
    ...groceries,
    ...clothes,

    ...jewellery,
    ...watch,
    ...fashion,
    ...electronics,
    ...sportsToysLuggage,
    ...dashboard,
  ];
  const visitor = [
    ...defaultHomePage,
    ...shop,
    ...groceries,

    ...jewellery,
    ...clothes,
    ...watch,
    ...fashion,
    ...electronics,
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
