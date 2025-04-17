"use client";

import { avatar } from "@/constant/constant";
import { IMobiles } from "@/types/Common";
import {
  Avatar,
  Button,
  Card,
  Form,
  Input,
  List,
  Rate,
  Space,
  Typography,
} from "antd";
import { useState } from "react";

const { TextArea } = Input;
const { Title, Text } = Typography;

type Review = {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
};

type IProps = {
  data?: IMobiles;
};

const ReviewSection = ({ data }: IProps) => {
  const review = data?.reviews;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [reviews, setReviews] = useState<Review[]>(review);

  const [form] = Form.useForm();

  const handleSubmit = (values: Omit<Review, "id">) => {
    console.log(values);

    form.resetFields();
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Title level={3}>Product Reviews</Title>

      <Card title="Leave a Review" className="mb-6">
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            name="rating"
            label="Rating"
            rules={[{ required: true, message: "Please select a rating" }]}
          >
            <Rate allowHalf />
          </Form.Item>

          <Form.Item
            name="comment"
            label="Comment"
            rules={[{ required: true, message: "Please leave a comment" }]}
          >
            <TextArea rows={4} placeholder="What did you think?" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <List
        header={<Title level={4}>All Reviews</Title>}
        dataSource={reviews}
        itemLayout="vertical"
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card>
              <Space align="center">
                <Avatar src={item.avatar || avatar} alt={item.user} />
                <Title level={5} style={{ margin: 0 }}>
                  {item.user}
                </Title>
                <div>
                  <Text italic style={{ margin: 0, fontSize: "10px" }}>
                    {item?.date}
                  </Text>
                </div>
              </Space>
              <br />
              <br />
              <Rate allowHalf disabled defaultValue={item.rating} />
              <p className="mt-2">{item.content}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ReviewSection;
