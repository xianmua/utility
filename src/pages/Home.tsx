import React, { useState } from "react";
import { Layout, Menu } from "antd";
import RoutesPage from "../Routes";
import { useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;

type MenuItem = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

const items: MenuItem[] = [
  { key: "/json", label: "JSON转换" },
  {
    key: "/choice",
    label: "选择困难",
    children: [
      { key: "/choice/roulette", label: "轮盘选择" },
      { key: "/choice/card", label: "卡牌选择" },
    ],
  },
  { key: "/raffle", label: "抽卡" },
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          defaultSelectedKeys={["/json"]}
          onClick={(e) => navigate(e.key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <RoutesPage />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
