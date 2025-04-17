"use client";

import { IMobiles } from "@/types/Common";
import type { CollapseProps } from "antd";
import { Collapse, Typography } from "antd";

const { Title } = Typography;

type Answer = {
  id: string;
  user: string;
  answer: string;
  date: string;
};

type FAQItem = {
  id: string;
  user: string;
  question: string;
  answers: Answer[];
  date: string;
};

type IProps = {
  data?: IMobiles; // single item now
};

const ProductFAQ = ({ data }: IProps) => {
  const faqs = data?.faqs as FAQItem[] | undefined;

  if (!faqs?.length) return null; // optional fallback

  const items: CollapseProps["items"] = faqs.map((faq) => ({
    key: faq.id,
    label: faq.question,
    children: (
      <div className="text-sm text-gray-700 space-y-2">
        {faq.answers.map((ans) => (
          <div key={ans.id}>
            <p>
              <strong>{ans.user}</strong> ({ans.date})
            </p>
            <p>{ans.answer}</p>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Title level={3} style={{ fontWeight: "bold" }}>
        Frequently Asked Questions
      </Title>
      <Collapse accordion items={items} expandIconPosition="end" />
    </div>
  );
};

export default ProductFAQ;
