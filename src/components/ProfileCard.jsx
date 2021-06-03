import React from "react";
import { Card, Avatar } from "antd";
import "../App.css";
import { DashOutlined } from "@ant-design/icons";

const { Meta } = Card;

export const ProfileCard = (props) => {
  return (
    <div>
      <Card style={{ width: "100%", borderRadius: "0" }}>
        <div className="cardclass">
          <div>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={props.customer.title}
              description={props.customer.email}
            />

            <Meta
              style={{ float: "right" }}
              description={"+90" + props.customer.gsm}
            />
          </div>
          <DashOutlined className="card-icon" />
        </div>
      </Card>
    </div>
  );
};
