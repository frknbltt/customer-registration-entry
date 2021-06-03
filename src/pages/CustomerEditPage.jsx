import React, { useContext, useState } from "react";
import { Layout, Button, Tabs, Drawer } from "antd";
import { ProfileCard } from "../components/ProfileCard";
import "../App.css";
import GoogleMapsPage from "../components/GoogleMap";
import { useParams } from "react-router";
import { CustomerContext } from "../contexts/CustomerContext";
import AddOrUpdateForm from "../components/AddOrUpdateForm";
import UnderConstructionComp from "../components/UnderConstructionComp";
import RelatedUsersForm from "../components/RelatedUsersForm";

const { Content, Sider } = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const CustomerEditPage = () => {
  const { id } = useParams();

  const { customers, updateCustomer } = useContext(CustomerContext);

  const selectedCustomer = customers.find((customer) => customer.id === id);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  console.log(selectedCustomer);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider className="sider" style={{ width: "30vh" }}>
        <ProfileCard customer={selectedCustomer} />
        <GoogleMapsPage />
        <AddOrUpdateForm
          initialValues={selectedCustomer}
          onSubmit={(values) => updateCustomer(values)}
          buttonTitle="Update"
        />
      </Sider>
      <Drawer
        className="phonedrawer"
        width={300}
        title="Create New Customer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <ProfileCard customer={selectedCustomer} />
        <GoogleMapsPage />
        <AddOrUpdateForm
          initialValues={selectedCustomer}
          onSubmit={(values) => updateCustomer(values)}
          buttonTitle="Update"
        />
      </Drawer>
      <Layout>
        <Content>
          <Button
            className="phonedrawer"
            type="primary"
            block
            onClick={showDrawer}
          >
            Click To Edit
          </Button>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="İlgili Kişiler" key="1">
              <RelatedUsersForm />
            </TabPane>
            <TabPane tab="Aramalar" key="2">
              <UnderConstructionComp />
            </TabPane>
            <TabPane tab="Ziyaretler" key="3">
              <UnderConstructionComp />
            </TabPane>
            <TabPane tab="Ürünler" key="4">
              <UnderConstructionComp />
            </TabPane>
            <TabPane tab="Siparişler" key="5">
              <UnderConstructionComp />
            </TabPane>
            <TabPane tab="Bakım Ajandası" key="6">
              <UnderConstructionComp />
            </TabPane>
            <TabPane tab="Cari" key="7">
              <UnderConstructionComp />
            </TabPane>
            <TabPane tab="Fatura Bilgisi" key="8">
              <UnderConstructionComp />
            </TabPane>
            <TabPane tab="Ayrıcalıklar" key="9">
              <UnderConstructionComp />
            </TabPane>
            <TabPane tab="Portal Bilgisi" key="10">
              <UnderConstructionComp />
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
};
