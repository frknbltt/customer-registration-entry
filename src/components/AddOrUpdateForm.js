import React, { useContext, useState } from "react";
import { Form, Input, Select, Button, Radio, Upload, AutoComplete } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="90">+90</Option>
    </Select>
  </Form.Item>
);

const AddOrUpdateForm = ({ initialValues = {}, onSubmit, buttonTitle,onClose }) => {
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const [_type, setType] = useState(initialValues.type);

  const [form] = Form.useForm();

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const onFinish = (values) => {
    console.log(values);
    const _values = { ...values, id: initialValues.id || uuidv4() };

    onSubmit(_values);
    form.resetFields();
  };


  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
        name="nest-messages"
        validateMessages={validateMessages}
        initialValues={initialValues}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 15,
        }}
        layout="horizontal"
      >
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group onChange={({ target: { value } }) => setType(value)}>
            <Radio value="sahis">Şahıs</Radio>
            <Radio value="tuzel">Tüzel</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name" name="title" rules={[{ required: true }]}>
          <Input placeholder="Name" />
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
        <Form.Item name="website" label="Website" rules={[{ required: true }]}>
          <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
            <Input placeholder="Website" />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          name={_type === "sahis" ? "tckn" : "vkn"}
          label={_type === "sahis" ? "TCKN" : "VKN"}
          rules={[
            {
              required: true,

              min: _type === "sahis" ? 11 : 10,
              max: _type === "sahis" ? 11 : 10,
            },
          ]}
        >
          <Input
            placeholder={_type === "sahis" ? "TCKN" : "VKN"}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="firm"
          label="Firm"
          hasFeedback
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Firm">
            <Select.Option value="servissoft">ServisSoft</Select.Option>
            <Select.Option value="firma">Firma A</Select.Option>
            <Select.Option value="firmb">Firma B</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="file"
          label="File"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true }]}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea placeholder="Address" />
        </Form.Item>
        <Form.Item
          name="note"
          label="Not"
          placeholder="Note"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea placeholder="Not" />
        </Form.Item>

        <Form.Item style={{ float: "right" }}>
          <Button
            style={{ marginBottom: "1rem" }}
            type="primary"
            htmlType="submit"
            onClick={onClose}
          >
            {buttonTitle}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddOrUpdateForm;
