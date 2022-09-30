import React from "react";
import Layout from "../../components/layout";
import Card from "../../components/card/Card";
import image from "../../assets/images/controller.png";

const Home = () => {
  return (
    <Layout>
      <div style={{ padding: 10 }}>
        <Card
          image={image}
          name="نام آیتم در دسته بندی"
          price={22_000_000}
          onClick={() => {}}
        />
      </div>
    </Layout>
  );
};

export default Home;
