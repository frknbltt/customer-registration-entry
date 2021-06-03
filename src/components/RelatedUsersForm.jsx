import React, { useContext, useEffect } from "react";
import { Form, Input, Select } from "antd";
import { RoleContext } from "../contexts/RoleContext";

const RelatedUsersForm = () => {
  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="90">+90</Option>
      </Select>
    </Form.Item>
  );

  const { roles, getRoles } = useContext(RoleContext);

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 8,
        }}
        layout="horizontal"
      >
        <Form.Item
          label="Name Surname"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Role">
            {roles.map((role) => (
              <Select.Option value={role.id}>{role.title}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="gsm"
          label="Phone"
          placeholder="GSM"
          rules={[
            {
              required: true,

              min: 10,
              max: 10,
            },
          ]}
        >
          <Input
            placeholder="GSM"
            addonBefore={prefixSelector}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
      </Form>
    </>
  );
};
export default RelatedUsersForm;
