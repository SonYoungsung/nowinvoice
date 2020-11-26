import React from "react";
import { Dropdown, Avatar, Menu, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import styled from "styled-components";

const User = styled.div``;
const Username = styled.span`
  padding: 0 10px;
  color: white;
  font-weight: 600;
`;

const GlobalHeaderRight = (props) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link" onClick={() => {}}>
          <LogoutOutlined />
          로그아웃
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <User>
        <Avatar>A</Avatar>
        <Username>Admin</Username>
      </User>
    </Dropdown>
  );
};

export default GlobalHeaderRight;
