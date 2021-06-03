import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router";

export const UnderConstructionComp = () => {
  const history = useHistory();
  return (
    <Result
      status="warning"
      title="This section is under constructor"
      extra={
        <Button onClick={() => history.push("/")} type="primary" key="console">
          Go to main page
        </Button>
      }
    />
  );
};

export default UnderConstructionComp;
