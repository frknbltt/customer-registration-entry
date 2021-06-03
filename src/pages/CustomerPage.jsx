import { Input, Table, Row, Col, Button, Drawer } from "antd";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import AddOrUpdateForm from "../components/AddOrUpdateForm";
import { CustomerContext } from "../contexts/CustomerContext";

export const CustomerPage = () => {
  const history = useHistory();
  const { Search } = Input;
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => <div> {type === "sahis" ? "Şahıs" : "Tüzel"} </div>,
    },
    {
      title: "Related Firm",
      dataIndex: "firm",
      key: "firm",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "GSM",
      dataIndex: "gsm",
      key: "gsm",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Portal Information",
      dataIndex: "info",
      key: "info",
    },
    {
      title: "",
      dataIndex: "id",
      key: "action",
      render: (id) => {
        return (
          <div style={{ display: "flex", gap: "5px" }}>
            <Button
              onClick={() => history.push(`/customer/${id}`)}
              type="primary"
            >
              Update
            </Button>
            <Button onClick={() => handleDelete(id)} type="primary" danger>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { customers, handleDelete, addCustomer } = useContext(CustomerContext);
  const [searchText, setSearchText] = useState("");

  const _customers = !!searchText
    ? customers.filter((o) =>
        Object.keys(o).some((k) =>
          o[k]
            ?.toString()
            .toLowerCase()
            .includes(searchText.toString().toLowerCase())
        )
      )
    : customers;

  return (
    <div style={{ marginTop: "1rem" }}>
      <Row justify="center">
        <Col span={20}>
          <Search
            style={{ width: 300 }}
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="middle"
            onChange={({ target }) => setSearchText(target.value)}
          />
          <Button
            style={{ float: "right" }}
            type="primary"
            onClick={showDrawer}
          >
            Create
          </Button>
          <Drawer
            width={400}
            title="Create New Customer"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Col span={20}>
              <AddOrUpdateForm
                onSubmit={(values) => addCustomer(values)}
                buttonTitle="Create"
                onClose={onClose}
              />
            </Col>
          </Drawer>
        </Col>
        <Col span={20}>
          <Table
            className="table"
            columns={columns}
            dataSource={_customers}
            size="small"
          />
          <Table
            className="tableformat"
            columns={columns}
            dataSource={_customers}
            scroll={{ x: 1300 }}
            size="small"
          />
        </Col>
      </Row>
    </div>
  );
};
